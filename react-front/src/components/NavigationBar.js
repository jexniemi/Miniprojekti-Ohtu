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
                            <a>Books</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                            {' '}
                            <Button type="submit">Submit</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;