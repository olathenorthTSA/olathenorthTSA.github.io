import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ReactDOM, { render } from 'react-dom';



import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Tsa from './Tsa.js';
import Cte from './Cte.js';

class Navigation extends React.Component {
    render() {
        return (
            // <Router>
            <div>
                <div>
                    <Navbar bg="light" expand="lg" fixed="top">
                        <Navbar.Brand as={Link} to="/tsa">TSA</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/cte">CTE</Nav.Link>
                                <Nav.Link as={Link} to="/">Design Brief</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                {/* <div> */}

                {/* </div> */}
            </div>
            // </Router>
        );
    }
}

export default Navigation;