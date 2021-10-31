import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [serv, setServ] = useState([]);
    useEffect(() => {
        fetch('https://radiant-escarpment-31543.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServ(data))
    }, [])

    const findServ = serv.find(tour => tour._id == serviceId);


    /*  form Part */

    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        data.email = user.email;
        data.name = user.displayName;
        data.serviceId = findServ?.title;



        fetch("https://radiant-escarpment-31543.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert('added successfully');
                    reset();
                }
            });
    };


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


                </div>
            </div>



            {/* Form */}
            <div className='form-part'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input required className='p-2 m-2' placeholder='address' {...register("address")} />
                    <br />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input required className='p-2 m-2' placeholder='phone number' type='number' {...register("phone")} />
                    <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input className='className="btn btn-warning fw-bold mt-3"' value='PLACE ORDER' type="submit" />
                </form>
            </div>



        </div>
    );
};
export default ServiceDetails;