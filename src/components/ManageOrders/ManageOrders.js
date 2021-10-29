import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, []);
    return (
        <div className='container'>
            <h1 className='text-center my-3'>All Orders: {order?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
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
                            <td>{pd?.phone}</td>
                            <td>{pd?.address}</td>
                            <button className="btn bg-warning p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrders;