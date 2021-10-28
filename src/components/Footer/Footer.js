import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='bg-secondary p-3 mt-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={logo} alt="" />
                        <p className='text-white mt-3 '>However we had not had occasion to use their comprehensive services until October year</p>

                    </div>
                    <div className="col-lg-4 ms-5">
                        <h2 className='text-white fs-3 fw-bold ms-5'>Useful Links
                        </h2>
                        <div className='text-light p-2 mt-4 ms-5'>
                            <Link className='text-decoration-none text-white ms-5' to='/services'> <p>About Us</p></Link>
                            <Link className='text-decoration-none text-white ms-5' to='/'> <p>Home</p></Link>
                            <Link className='text-decoration-none text-white ms-5' to='/about'> <p>About Us</p></Link>


                        </div>
                    </div>

                    <div className="col-lg-3 ms-5">
                        <h2 className='text-white fs-3 fw-bold ms-5'>Contact
                        </h2>
                        <div className='text-light p-2 mt-4 ms-5'>
                            <p>Explore new worlds with us</p>

                            <FontAwesomeIcon className='fs-3  text-secondary mt-4' icon={faLocationArrow} />
                            <span>Dhaka,Bangladesh</span>





                        </div>
                    </div>
                </div>
                <h6 className='text-white text-center mt-5'>© 2021 Aventoura. All rights reserved</h6>
            </div>
        </div>
    );
};

export default Footer;