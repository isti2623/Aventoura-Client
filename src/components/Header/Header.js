import React from 'react';
import logo from '../../images/logo.png'
import { Container, Nav, Navbar, Stack, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logout } = useAuth();
    const {
        signInUsingGoogle,

    } = useFirebase();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
            <Navbar collapseOnSelect navbar-collapse expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/'> <Navbar.Brand><img src={logo} alt="" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">

                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-warning ms-3'
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-warning'
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                About
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-warning'
                                to="/services"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-warning ms-2'
                                to="/client"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Client
                            </NavLink>
                            {
                                user.email &&
                                <div className='ms-2'>
                                    <NavLink
                                        className='text-decoration-none  fs-5 text-warning'
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
                                </div>
                            }


                            <div className='container'>

                                <img className='details-header  mt-2 ms-3' src={user.photoURL} alt="" />
                                <br />
                                <span className='text-dark fw-bold ms-2'>{user.displayName}</span>


                                {
                                    user.email ?
                                        <Button onClick={logout} className='menu-btn' variant="warning"> Logout</Button>
                                        :
                                        <Button onClick={handleGoogleLogin} className='menu-btn' variant="warning">Login</Button>
                                }

                            </div>


                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;