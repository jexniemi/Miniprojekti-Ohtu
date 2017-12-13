import React from "react";
import $ from "jquery";
import YouTube from 'react-youtube';

class Tip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            title: "",
            editing: false
        }

        this.renderEdit = this.renderEdit.bind(this);
        this.delete = this.delete.bind(this);
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

                <br />
                <input type="text" value={this.state.title}
                    onChange={(e) => this.setState({ title: e.target.value })} />

                <span style={styles.complete} onClick={() => this.update()}><i className="fa fa-check" aria-hidden="true"></i></span>
            </div>
        );
    }

    delete() {
        this.changeEditing();
        this.props.removeBook(this.props.book._id)
        $.ajax({
            type: "DELETE",
            url: "/api/tips/" + this.props.book._id,
            dataType: "application/json"
        });
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

    renderTip() {
        var {author, title} = this.state;       
        if (this.props.book.type === "videos") {
            var parts = this.props.book.title.split("?v=");
            var videoId = parts[1];
        } 
        return (
            <div style={{ marginBottom: "5%" }}>
                {
                    (this.props.book.type === "books") &&
                    <div>
                        <p style={{fontWeight: 'bold', display: 'inline'}}>- {author}</p>: {title} <span style={styles.edit}
                        onClick={() => this.changeEditing()}><i className="fa fa-pencil" aria-hidden="true"></i></span>
                        <span style={styles.delete} onClick={() => this.delete()}><i className="fa fa-trash" aria-hidden="true"></i></span>
                    </div>
                }
                {
                    (this.props.book.type === "videos") &&
                    <div style={{ fontSize: "20px" }}>
                        <p style={{fontWeight: 'bold', display: 'inline'}}>{author}</p><span style={styles.edit}
                        onClick={() => this.changeEditing()}><i className="fa fa-pencil" aria-hidden="true"></i></span>
                        <span style={styles.delete} onClick={() => this.delete()}><i className="fa fa-trash" aria-hidden="true"></i></span>
                        <YouTube videoId={videoId} />
                    </div> 
                }
            </div>            
        )
    }

    render() {
        return (
            <div>
                {this.state.editing && this.renderEdit()}
                {!this.state.editing && this.renderTip()}
            </div>
        )
    }
}

const styles = {
    edit: {
        cursor: "pointer",
        marginLeft: "4px"
    },
    complete: {
        margin: "0% 1% 0% 1%",
        cursor: "pointer",
        color: "green"
    },
    delete: {
        cursor: "pointer",
        color: "red",
        marginLeft: "4px"
    }
}

export default Tip;