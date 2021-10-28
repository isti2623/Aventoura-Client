import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { title, image, desc, _id } = props.service;
    const url = `/servicedetails/${_id}`
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={url}><div className="btn btn-warning fw-bold">BOOK NOW</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;