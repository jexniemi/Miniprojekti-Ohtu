import React from 'react';
import Tip from "./Tip";
import SubmitForm from './SubmitForm';

var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;

var first = 0;

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: this.props.books
        };
    }

    componentWillMount() {
        first = 0;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({bookList: nextProps.books})
    }

    render() {
        var renderedBooks;
        if (first < 2) {
            renderedBooks = this.props.books.map((b, id) =>
                <Tip key={b._id} book={b} removeBook={this.props.removeBook} />
            )
            first++;
        } else {
            renderedBooks = this.state.bookList.map((b, id) =>
                <Tip key={b._id} book={b} removeBook={this.props.removeBook} />
            )
        }   

        return (
            <div className="Search">
                <FormGroup>
                    <FormControl onChange={(e) => {
                        var books = this.props.books.filter((book) => {
                            return (book.author.toLowerCase().includes(e.target.value.toLowerCase().trim()) 
                                    || book.title.toLowerCase().includes(e.target.value.toLowerCase().trim()));
                        });
                        this.setState({ bookList: books });
                    }} type="text" placeholder="filter" />
                </FormGroup>
                <div style={{marginLeft: "15px"}}>
                    {renderedBooks}
                </div>
            </div>
        )
    }
}

export default Search;