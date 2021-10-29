import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, []);


    //Delete Part

    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(products);
            })
    }, [products]);

    //DELETE AN Products
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        console.log(data);
                        const remainingProducts = orders.filter(order => order._id !== id);
                        console.log(remainingProducts);
                        console.log(products);
                        setOrders(remainingProducts);
                    }
                })
        }

    }
    return (
        <div className='container'>
            <h1 className='text-center my-3'>All Orders: {order?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Place Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                {order?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.serviceId}</td>
                            <td>{pd?.phone}</td>
                            <td>{pd?.address}</td>
                            <button onClick={() => handleDeleteUser(pd._id)} className="btn btn-danger m-2">Cancel</button>
                            <Link to={`orders/update/${pd._id}`}> <Button className='ms-5' variant="success">Edit</Button></Link>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrders;