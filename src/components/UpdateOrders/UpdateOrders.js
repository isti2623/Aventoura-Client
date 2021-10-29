import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateOrders = () => {
    const { productId } = useParams();
    const [isUpdate, setIsUpdated] = useState(null);
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${productId}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [productId]);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/orders/${productId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setIsUpdated(true);
                } else {
                    setIsUpdated(false);
                }
            });
        console.log(data);
    };
    return (
        <div>
            <h1>Updated</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                    type="number"
                    className="p-2 m-2"
                    placeholder='phone'
                    defaultValue={product?.phone}
                    {...register("phone")}
                    required
                />
                {/* include validation with required or other standard HTML validation rules */}
                <input
                    className="p-2 m-2"
                    type="text"
                    placeholder='address'
                    defaultValue={product?.address}
                    {...register("address", { required: true })}
                    required
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="btn btn-success w-25" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrders;