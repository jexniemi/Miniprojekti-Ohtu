import React from 'react';
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
                title: this.state.title,
                type: this.props.view.viewName
            }),
            headers: { "Content-Type": "application/json" }
        }).then(this.props.refreshTips())
        .catch(function() {
            console.log('error posting new a tip')});
    }

    render() {
        var isEnabled = this.state.author.trim().length > 0 && this.state.title.trim().length > 0 && this.state.author.trim().length < 60 && this.state.title.trim().length < 60;
        
        return (
            <form>
                <FormGroup>
                    <ControlLabel>{this.props.view.field1}:</ControlLabel>
                    <FormControl type="text" onChange={(e) => this.setState({ author: e.target.value })} value={this.state.author} />
                    <ControlLabel>{this.props.view.field2}:</ControlLabel>
                    <FormControl type="text" onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title} />
                </FormGroup>
                
                <Button disabled={!isEnabled}  onClick={() => this.postForm()}>Sumbit</Button> 
            </form>
        );
    }

}

export default SubmitForm;
