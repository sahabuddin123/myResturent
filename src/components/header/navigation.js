import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    };
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <Navbar dark color="dark" expand="sm" container="xl" fixed="top">
                <NavbarToggler onClick={this.navToggle} />
                <NavbarBrand href="/">INNOVA Resturent</NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link active">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/menu" className="nav-link">Menu</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;