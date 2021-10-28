import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className=' banner mt-2'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6">
                        <div className='text-part'>
                            <h4 className='text-warning fs-2 ms-1'>WELCOME TO AVENTOURA</h4>
                            <h1 className='text-white ms-1 custom-h1'>Explore new worlds with us</h1>
                            <p className='text-white fw-bold ms-1'>Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.</p>
                            <Link to='services'> <Button className='mt-3 rounded ' variant="warning fw-bold">OUR SERVICES</Button></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;