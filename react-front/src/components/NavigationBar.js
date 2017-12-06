import React from 'react';

// comment

var Button = require('react-bootstrap').Button;
var Navbar = require('react-bootstrap').Navbar;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a>BookBuddy</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;