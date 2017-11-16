import React from 'react';

// comment

var Navbar = require('react-bootstrap').Navbar;

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
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;