import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import clientOne from '../../images/clientOne.jpg'
import clientTwo from '../../images/clientTwo.jpg'
import clientThree from '../../images/clientThree.jpg'

const Client = () => {
    return (
        <div>
            <div className='container about-part '>
                <h2 className='fw-bold text-warning text-center'>TESTIMONIAL
                </h2>
                <h2 className='custom-h2 mt-5 text-center'>What They Say

                </h2>
                <div className="row my-5">
                    <div className="col-lg-4">
                        <div className='card p-3 text-center'>
                            <p>The Tangible Words team have been on our radar for some time. However we had not had occasion to use their comprehensive services until October year</p>
                            <div className='mt-2'>
                                <img className='details-header' src={clientTwo} alt="" />
                            </div>
                            <div className='mt-3'>
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-secondary' icon={faStar} />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className='card p-3 text-center'>
                            <p>Tourism's Sustainable Future Outlined at Barcelona Summit ... build a more prosperous and peaceful world through tourism, we will not leave anyone behind</p>
                            <div className='mt-2'>
                                <img className='details-header' src={clientOne} alt="" />
                            </div>
                            <div className='mt-3'>
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-secondary' icon={faStar} />
                                <FontAwesomeIcon className='text-secondary' icon={faStar} />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className='card p-3 text-center'>
                            <p>The act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the</p>
                            <div className='mt-2'>
                                <img className='details-header' src={clientThree} alt="" />
                            </div>
                            <div className='mt-3'>
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                            </div>
                        </div>

                    </div>

                </div>





            </div>
        </div>
    );
};
export default Client;