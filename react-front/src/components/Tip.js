import React from "react";
import $ from "jquery";

class Tip extends React.Component {
    render() {
        var b = this.props.book;
        return (
            <p>{b.author}: {b.title} <span style={styles.edit} onClick={(b) => this.edit(b)}>edit</span></p>
        )
    }

    edit() {
        alert("edit");
    }
}

const styles = {
    edit: {
        cursor: "pointer",
        color: "blue"
    }
}

export default Tip;