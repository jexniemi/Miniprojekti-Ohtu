import React from "react";
import $ from "jquery";

class Tip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            title: "",
            editing: false
        }
    }

    componentDidMount() {
        var b = this.props.book;
        this.setState({
            author: b.author,
            title: b.title
        });

        this.renderEdit = this.renderEdit.bind(this);
        this.changeEditing = this.changeEditing.bind(this);
        this.update = this.update.bind(this);
    }

    renderEdit() {
        return (
            <div>
                <input type="text" value={this.state.author}
                    onChange={(e) => this.setState({ author: e.target.value })} />

                <input type="text" value={this.state.title}
                    onChange={(e) => this.setState({ title: e.target.value })} />

                <span style={styles.edit} onClick={() => this.update()}>done</span>
            </div>
        );
    }

    update() {
        this.changeEditing();
        $.ajax({
            type: "PUT",
            url: "/api/tips",
            data: {
                _id: this.props.book._id,
                author: this.state.author,
                title: this.state.title
            },
            dataType: "application/json"
        });
    }

    changeEditing() {
        this.setState({
            editing: !this.state.editing
        });
    }

    render() {
        var {author, title} = this.state;
        return (
            <div>
                {this.state.editing && this.renderEdit()}
                {!this.state.editing && <p>{author}: {title} <span style={styles.edit}
                    onClick={() => this.changeEditing()}>edit</span></p>}
            </div>
        )
    }
}

const styles = {
    edit: {
        cursor: "pointer",
        color: "blue"
    }
}

export default Tip;