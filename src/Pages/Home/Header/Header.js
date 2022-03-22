import { Button } from 'bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (    
        <Navbar className="header p-4"  sticky='top' collapseOnSelect expand="lg">
        <Container className="headers-container">
            <Navbar.Brand className="nav-title" style={{fontSize: '30px', fontWeight: '600'}} href="#home"> <span style={{color: '#28B463'}}>MMC</span>Hospital </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Link to='/home' className="navbar-link-custom">Home</Link>
            <Link to='/dashboard' className="navbar-link-custom">Dashboard</Link>
            <Link to='' className="navbar-link-custom">SignIn</Link>
        
            <Navbar.Text>
              
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    );
};

export default Header;