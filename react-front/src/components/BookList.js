import React from 'react';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books
        }
    }

    render() {
        var renderBooks = this.state.books.map((b, id) => {
            <p>{b.author}s</p>
        })

        return(
            <div>
                {this.state.books[1]}
                {renderBooks}
            </div>
        )
    }
}

export default BookList;