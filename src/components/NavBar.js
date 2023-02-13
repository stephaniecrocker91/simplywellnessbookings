import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="md" fixed="top">
        <Container>
            <Navbar.Brand href="#home">Simply Wellness Bookings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">
                <i class="fa-solid fa-house"></i>
                    Home</Nav.Link>
                <Nav.Link href="#link">
                <i class="fa-solid fa-right-to-bracket"></i>
                    Sign In
                </Nav.Link>
                <Nav.Link href="#link">
                <i class="fa-solid fa-user-plus"></i>
                    Sign Up</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item> */}
                {/* </NavDropdown> */}

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default NavBar