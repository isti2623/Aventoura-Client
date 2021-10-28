import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container py-5'>
            <div className='container about-part '>
                <h2 className='fw-bold text-warning text-center'>SERVICES
                </h2>
                <h2 className='custom-h2 mt-5 text-center mb-5'>Your Best Choice

                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service =>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={service.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.desc}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="btn btn-warning fw-bold">BOOK NOW</div>
                                    </div>
                                </div>
                            </div>


                        )

                    }


                </div>
            </div>
        </div>
    );
};

export default Services;