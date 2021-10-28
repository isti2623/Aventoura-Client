import React from 'react';
import logo from '../../images/logo.png'
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect navbar-collapse expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/'> <Navbar.Brand><img src={logo} alt="" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Stack direction="horizontal" gap={3}>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/services"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/client"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Client Review
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/myOrders"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    My Orders
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/manageOrders"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Manage All orders
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/addServices"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Add New Services
                                </NavLink>
                            </Stack>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;