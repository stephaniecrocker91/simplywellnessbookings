import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Container className={styles.NavBar}>
                <NavLink exact to="/" className={styles.NavLink} activeClassName={styles.Active}>
                    <Navbar.Brand>Simply Wellness Bookings</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink 
                    exact 
                    to="/" 
                    className={styles.NavLink} 
                    activeClassName={styles.Active}>
                        <i class="fa-solid fa-house"></i>
                        Home
                    </NavLink>
                    <NavLink 
                        to="/signin" 
                        className={styles.NavLink} 
                        activeClassName={styles.Active}>
                        <i class="fa-solid fa-right-to-bracket"></i>
                        Sign In
                    </NavLink>
                    <NavLink 
                        to="/signup" 
                        className={styles.NavLink} 
                        activeClassName={styles.Active}>
                        <i class="fa-solid fa-user-plus"></i>
                        Sign Up
                    </NavLink>
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
    )
}

export default NavBar