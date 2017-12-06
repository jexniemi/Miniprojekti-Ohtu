import React from 'react';

// comment

var Button = require('react-bootstrap').Button;
var Navbar = require('react-bootstrap').Navbar;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="NavHeader">BookBuddy</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default NavigationBar;