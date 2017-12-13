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
    }

    render() {
        var books = this.props.books.filter((item) => {
            return item.type === this.props.view.viewName; 
        });
        return (
            <div className="BookList">
                <div className="PostForm">
                    <h2> Submit suggestions </h2>
                        <SubmitForm refreshTips={this.props.getBooks} view={this.props.view}/>
                </div>
                <div className="Tips" style={{ marginLeft: '5px' }}>
                    <h2> {this.props.view.target} suggestions </h2>
                    <Search books={books} removeBook={this.props.removeBook} updateBooks={this.props.updateBooks}/>
                </div>
            </div>
        )
    }
}

export default BookList;