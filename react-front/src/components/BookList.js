import React from 'react';
import Tip from "./Tip";
import SubmitForm from './SubmitForm';
import Search from './Search';

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
        this.updateBooks = this.updateBooks.bind(this);
    }

    componentDidMount() {
        this.getBooks();    
    }

    componentDidUpdate() {
        console.log("hwe");
    }

    getBooks = () => {
        fetch('/api/tips')
            .then(res => res.json())
            .then(books => {
                console.log(books);
                this.setState({
                    books: books,
                    bookList: books
                })
            }).catch(function() {
                console.log('Could not fetch books');
            });
    }

    removeBook(_id) {
        var newBooks = this.state.books.filter(book => book._id !== _id);
        this.setState({
            books: newBooks,
            bookList: newBooks
        });
    }

    updateBooks(books) {
        this.setState({
            bookList: books
        })
    }

    render() {
        var books = this.state.books.filter((item) => {
            return item.type === this.props.view.viewName; 
        });

        var renderBooks = this.state.bookList.map((b, id) =>
            <Tip key={b._id} book={b} removeBook={this.props.removeBook} />
        )

        return (
            <div>
                <div className="PostForm">
                    <h2> Submit suggestions </h2>
                        <SubmitForm refreshTips={this.getBooks} view={this.props.view}/>
                </div>
                <div className="Tips" style={{ marginLeft: '5px' }}>
                    <h2> {this.props.view.target} suggestions </h2>
                    <Search books={books} removeBook={this.removeBook} updateBooks={this.updateBooks}/>
                    <div style={{marginLeft: "15px"}}>
                        {renderBooks}
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList;