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
            books: this.props.books,
            bookList: this.props.books
        };
    }

    componentDidUpdate() {
        console.log("ada");
        console.log(this.props.books);
    }

    render() {
        var renderBooks = this.state.bookList.map((b, id) =>
            <Tip key={b._id} book={b} removeBook={this.props.removeBook} />
        )

        return (
            <div className="Search">
                <FormGroup>
                    <FormControl onChange={(e) => {
                        var books = this.props.books.filter((book) => {
                            return (book.author.toLowerCase().includes(e.target.value.toLowerCase().trim()) 
                                    || book.title.toLowerCase().includes(e.target.value.toLowerCase().trim()));
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
        )
    }
}

export default Search;