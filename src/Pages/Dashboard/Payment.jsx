import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L33tRCNX1JRfLwceXMHI7RFV7uXixv9DJE8yOyn3CLRZw3qGc1lp4Ztih8g81yHw1h9Qj1pNInVmVSqAFYilnSk00n0UeoJjp');

const Payment = () => {
    const { id } = useParams();
    const url = `https://ss-manufacturer.herokuapp.com/order/${id}`;

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
            <div className="card mx-auto w-2/4  bg-base-100 shadow-xl  mt-28">
            <div className="card-body">
                <h2 className="card-title">{order.productName}</h2>
                <p>Quantity: {order.quantity} </p>
                <p>Total Price: {order.price} </p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>

            <div className="card mx-auto w-2/4  bg-base-100 shadow-xl  mt-28">
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