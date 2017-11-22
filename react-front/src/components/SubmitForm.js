import React from 'react';
import Field from './formfields/Field';

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
        this.authorOnChange = this.authorOnChange.bind(this);
        this.titleOnChange = this.titleOnChange.bind(this);
    }

  postForm($author, $title) {
    fetch('/api/tips', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: this.state.author,
        title: this.state.title
      })
    })
  }

  authorOnChange(e) {
      this.setState({author: e});
  }

  titleOnChange(e) {
      this.setState({title: e})
  }

    render() {
        return (
            <form>
                <FormGroup>
                <Field title="Author:" onChange={this.authorOnChange}/>
                <Field title="Title:" onChange={this.titleOnChange}/>
                </FormGroup>
                <Button onClick={this.postForm}>Submit</Button>
            </form>
        );
    }

}

export default SubmitForm;
