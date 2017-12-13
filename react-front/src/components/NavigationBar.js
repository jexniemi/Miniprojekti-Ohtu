import React from 'react';

var Button = require('react-bootstrap').Button;
var Navbar = require('react-bootstrap').Navbar;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;
var Nav = require("react-bootstrap").Nav;
var NavItem = require("react-bootstrap").NavItem;

const books = { 
    viewName: "books",
    target: "Book",
    field1: "Author",
    field2: "Book title"
}
const videos = { 
    viewName: "videos",
    target: "Youtube",
    field1: "Video",
    field2: "Link"
}

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand className="Brand">
                        <a href="/">BookMate</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem style={styles.headerLink} onClick={() => this.props.changeView(books)}>Books</NavItem>
                        <NavItem style={styles.headerLinkn} onClick={() => this.props.changeView(videos)}>Videos</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const styles = {
    headerLink: {
        cursor: "pointer",
        color: "white"
    }
}

export default NavigationBar;