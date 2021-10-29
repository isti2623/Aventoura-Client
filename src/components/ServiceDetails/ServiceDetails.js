import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [serv, setServ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServ(data))
    }, [])

    const findServ = serv.find(tour => tour._id == serviceId)
    return (
        <div className='container'>
            <div className="row container">
                <div className="col-md-6">

                    <img className='w-100 mt-5' src={findServ?.image} alt="" />
                </div>
                <div className="col-md-6">
                    <h1 className='mt-5 fw-bold text-warning'>{findServ?.title}</h1>
                    <hr />
                    <h5 className='mt-2'>{findServ?.desc}</h5>
                    <div className="btn btn-warning fw-bold mt-3">PLACE ORDER</div>



                </div>
            </div>

        </div>
    );
};
export default ServiceDetails;