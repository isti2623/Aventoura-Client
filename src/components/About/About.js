import React from 'react';
import './About.css'
import about from '../../images/about.png'

const About = () => {
    return (
        <div>
            <div className='container about-part '>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={about} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className=' ms-5 my-5'>
                            <h2 className='fw-bold text-warning'>ABOUT US</h2>
                            <h2 className='custom-h2 mt-5'>Travel the <span className='text-primary'>world</span> one <span className='text-primary'>place</span> at a time
                            </h2>
                            <p className='text-secondary mt-4'>It is a long established fact that a reader will be distracted by thethe readable content off a page when looking at its layout point using Lorem Ipsum is that it has.

                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
export default About;