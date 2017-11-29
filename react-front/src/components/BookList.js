import React from 'react';
import $  from "jquery";

class BookList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var renderBooks = this.props.books.map((b, id) =>
            <p>{b.author}: {b.title} <span style={styles.edit} onClick={(b) => this.edit(b)}>edit</span></p>
        )

        return (
            <div>
                {renderBooks}
            </div>
        )
    }

    edit(b) {
        alert(b);
    }
}

const styles = {
    edit: {
        cursor: "pointer",
        color: "blue"
    }
}

export default BookList;