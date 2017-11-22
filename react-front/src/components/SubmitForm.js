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
                    <Field title="Author:" onChange={(author) => this.setState({ author: author })} />
                    <Field title="Title:" onChange={(title) => this.setState({ title: title })} />
                </FormGroup>
                <Button onClick={() => this.postForm()}>Submit</Button>
            </form>
        );
    }

}

export default SubmitForm;
