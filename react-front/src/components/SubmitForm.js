import React from 'react';
import Field from './formfields/Field';
import $ from "jquery";

var Button = require('react-bootstrap').Button;
var FormGroup = require('react-bootstrap').FormGroup;
var FormControl = require('react-bootstrap').FormControl;
var ControlLabel = require('react-bootstrap').ControlLabel;

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
        });
        fetch("/api/tips", {
            method: "POST",
            body: JSON.stringify({
                author: this.state.author,
                title: this.state.title
            }),
            headers: { "Content-Type": "application/json" }
        }).then(this.props.refreshTips());
    }

    render() {
        return (
            <form>
                <FormGroup>
                    <ControlLabel>Author:</ControlLabel>
                    <FormControl type="text" onChange={(e) => this.setState({ author: e.target.value })} value={this.state.author} />
                    <ControlLabel>Book title:</ControlLabel>
                    <FormControl type="text" onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title} />
                </FormGroup>
                <Button onClick={() => this.postForm()}>Submit</Button>
            </form>
        );
    }

}

export default SubmitForm;
