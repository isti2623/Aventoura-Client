import React from 'react';
import logo from '../../images/logo.png'
import { Container, Nav, Navbar, Stack, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect navbar-collapse expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/'> <Navbar.Brand><img src={logo} alt="" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Stack direction="horizontal" gap={5}>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-3'
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning'
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning'
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
                                    Client
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/myOrders"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    MyOrders
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/manageOrders"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    ManageOrders
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-warning ms-2'
                                    to="/addServices"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    AddNewServices
                                </NavLink>


                                <div className='container'>

                                    <img className='details-header ms-2 mt-2' src={user.photoURL} alt="" />
                                    <span className='text-dark fw-bold'>{user.displayName}</span>


                                    {
                                        user.email ?
                                            <Button onClick={logout} className='menu-btn' variant="warning"> Logout</Button>
                                            :
                                            <Link to='/login'><Button className='menu-btn' variant="warning"> Login</Button></Link>
                                    }

                                </div>

                            </Stack>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;