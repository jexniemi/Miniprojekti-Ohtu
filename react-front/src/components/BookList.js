import React from 'react';
import Tip from "./Tip";
import SubmitForm from './SubmitForm';

var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            bookList: []
        };
        this.getBooks = this.getBooks.bind(this);
        this.removeBook = this.removeBook.bind(this);
        this.addBook = this.addBook.bind(this);
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        fetch('/api/tips')
            .then(res => res.json())
            .then(books => {
                this.setState({
                books: books,
                bookList: books
            })});
    }

    removeBook(_id) {
        var newBooks = this.state.books.filter(book => book._id !== _id);
        this.setState({
            books: newBooks,
            bookList: newBooks
        });
    }

    addBook(book) {
        var newBooks = this.state.books;
        newBooks.push(book);
        this.setState({
            books: newBooks,
            bookList: newBooks
        });
    }

    render() {
        var renderBooks = this.state.bookList.map((b, id) =>
            <Tip key={b._id} book={b} removeBook={this.removeBook} />
        )

        return (
            <div>
                <div className="PostForm">
                <h2> Submit suggestions </h2>
                    <SubmitForm refreshTips={this.addBook} />
                </div>
                <div className="Tips" style={{ marginLeft: '5px' }}>
                    <h2> Book suggestions </h2>
                    <div className="Search">
                        <FormGroup>
                            <FormControl onChange={(e) => {
                                var books = this.state.books.filter((book) => {
                                    return (book.author.includes(e.target.value) || book.title.includes(e.target.value));
                                });
                                this.setState({
                                    bookList: books
                                });
                            }} type="text" placeholder="filter" />
                        </FormGroup>
                        <div style={{marginLeft: "15px"}}>
                        {renderBooks}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BookList;