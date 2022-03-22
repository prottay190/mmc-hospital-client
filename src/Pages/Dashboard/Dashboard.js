import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">DashBoard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">DashBoard Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="dashboard-menu justify-content-end flex-grow-1 pe-3">
                                <Link to='/home'>Home</Link >
                                <Link to=''>Manage Appointment</Link >
                                <Link to=''>Make Admin</Link >
                                <Link to=''>View All Appointment</Link >
                                <Link to=''>Discounts</Link >
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div>
                <h3>ALL The functionlity of the dashboard is coming after the exam. Exam 23/3/22 to 31/3/22 . </h3>
            </div>
        </div>
    );
};

export default Dashboard;