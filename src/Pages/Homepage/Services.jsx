import React from 'react';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',  price: 1.9, min_order:1000, available_quantity:1000,
            img: 'fluoride'
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',  price: 1.9, min_order:1000, available_quantity:1000,
            img: 'cavity'
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',  price: 1.9, min_order:1000, available_quantity:1000,
            img: 'whitening'
        },     
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',  price: 1.9, min_order:1000, available_quantity:1000,
            img: 'whitening'
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',  price: 1.9, min_order:1000, available_quantity:1000,
            img: 'whitening'
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',  price: 1.9, min_order:1000, available_quantity:1000,
            img: 'whitening'
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Products</h3>
                <h2 className='text-4xl'>Products We Sell</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;