import React from 'react';
import Tip from "./Tip";
import SubmitForm from './SubmitForm';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.getBooks = this.getBooks.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        fetch('/api/tips')
          .then(res => res.json())
          .then(books => this.setState({ books }));
    }

    removeBook(_id) {
        var newBooks = this.state.books.filter(book => book._id != _id);
        this.setState({
            books: newBooks
        });
    }

    render() {
        var renderBooks = this.state.books.map((b, id) =>
            <Tip book={b} removeBook={this.removeBook} />
        )

        return (
            <div>
                <div className="PostForm">
                    <SubmitForm refreshTips={this.getBooks}/>
                </div>
                <h2>Tips: </h2>
                {renderBooks}
            </div>
        )
    }
}

const styles = {
}

export default BookList;