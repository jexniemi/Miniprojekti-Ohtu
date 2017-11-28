import React from 'react';
import Field from './formfields/Field';
import $ from "jquery";

var Button = require('react-bootstrap').Button;
var FormGroup = require('react-bootstrap').FormGroup;

class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            title: ""
        }
        this.postForm = this.postForm.bind(this);
    }

    postForm() {
        this.setState({
            author: "",
            title: ""
        })
        $.ajax({
            type: "POST",
            url: "/api/tips",
            data: {
                author: this.state.author,
                title: this.state.title
            },
            dataType: "application/json"
        });
    }

    render() {
        return (
            <form>
                <FormGroup>
                    <label>Author:</label>
                    <br />
                    <input type="text" onChange={(e) => this.setState({ author: e.target.value })} value={this.state.author} />
                    <br />
                    <label>Book's title:</label>
                    <br />
                    <input type="text" onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title} />
                </FormGroup>
                <Button onClick={() => this.postForm()}>Submit</Button>
            </form>
        );
    }

}

export default SubmitForm;
