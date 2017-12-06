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
                <h2> Submit suggestions </h2>
                    <SubmitForm refreshTips={this.getBooks} />
                </div>
                <div className="Tips" style={{ marginLeft: '5px' }}>
                    <h2> Book suggestions </h2>
                    <div className="Search">
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                    {renderBooks}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
}

export default BookList;