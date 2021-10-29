import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container py-5'>
            <div className='container about-part'>
                <h2 className='fw-bold text-warning text-center'>SERVICES
                </h2>
                <h2 className='custom-h2 mt-5 text-center mb-5'>Your Best Choice

                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)

                    }


                </div>
            </div>
        </div>
    );
};

export default Services;