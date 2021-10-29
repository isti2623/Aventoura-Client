import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, [user.email]);

    console.log(events);
    console.log(events);
    return (
        <div className='container'>
            <h1 className='text-center my-3'>All Orders: {events?.length}</h1>
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
                {events?.map((pd, index) => (
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
export default MyOrders;