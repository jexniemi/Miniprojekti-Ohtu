import React from 'react';
import Tip from "./Tip";
import SubmitForm from './SubmitForm';

var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books
        };
    }

    componentDidUpdate() {
        console.log("ada");
        console.log(this.props.books);
    }

    render() {
        return (
            <div className="Search">
                <FormGroup>
                    <FormControl onChange={(e) => {
                        var books = this.props.books.filter((book) => {
                            return (book.author.toLowerCase().includes(e.target.value.toLowerCase().trim()) 
                                    || book.title.toLowerCase().includes(e.target.value.toLowerCase().trim()));
                        });
                        this.props.updateBooks(books);
                    }} type="text" placeholder="filter" />
                </FormGroup>
            </div>
        )
    }
}

export default Search;