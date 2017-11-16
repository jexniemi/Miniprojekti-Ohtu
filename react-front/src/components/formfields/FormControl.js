import React from 'react';

var formControl = require('react-bootstrap').FormControl;
var controlLabel = require('react-bootstrap').ControlLabel;

class FormControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            warning: "",
            title: this.props.title,
            maxLength: this.props.length
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({input: e.target.value})
    }


    render() {
        return (
            <div>
                <ControlLabel>{this.props.title}}</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.input}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}