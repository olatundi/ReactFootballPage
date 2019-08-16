import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import "../App.css"

export default function Header() {

    return (
        <Navbar bg="light" expand="lg">

            <Navbar.Brand id="navTitle" href="/">Latest Football Highlights</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    
                    <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item href="">Books</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">Electronics</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">Cards</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}