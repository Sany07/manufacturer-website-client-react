import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
      navigate(`/purchase/${id}`);
    };
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-left">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <p>{service.min_order} (Min. Order)</p>
                <p>{service.available_quantity}</p>
                <p>$ {service.price}</p>
               <button onClick={() => navigateToProductDetail(service._id)} className='btn btn-primary mt-5 text-white'>Buy Now</button>
            </div>
        </div>
    );
};

export default Service;