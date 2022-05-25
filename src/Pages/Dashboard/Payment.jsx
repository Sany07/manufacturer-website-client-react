import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KzgdMJVa6zVY99CaGts94G8qqJirQWPMAET7VBqrec0wWSxhuuRtgQNPA3SuwzjQKOv6QWwjgMWEfZ83N1qLNUU00IX1ciL6e');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <LoadingSpinner/>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.name}</p>
                    <h2 class="card-title">Please Pay for {order.price}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{order.date}</span> at {order.slot}</p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;