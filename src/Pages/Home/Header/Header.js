import { Button } from 'bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (    
        <Navbar className="header p-4"  sticky='top' collapseOnSelect expand="lg">
        <Container className="headers-container">
            <Navbar.Brand className="nav-title" style={{fontSize: '30px', fontWeight: '600'}} href="#home"> <span style={{color: '#28B463'}}>MMC</span>Hospital </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="navbar-link-custom">Home</Nav.Link>
            <Nav.Link className="navbar-link-custom">Home</Nav.Link>
            <Nav.Link className="navbar-link-custom">Home</Nav.Link>
        
            <Navbar.Text>
              
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    );
};

export default Header;