import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
const Product = ({product}) => {
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
      navigate(`/purchase/${id}`);
    };
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-left">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.stock}</p>
                <p>{product.minimumorder} (Min. Order)</p>
                <p>$ {product.price}</p>
               <button onClick={() => navigateToProductDetail(product._id)} className='btn btn-primary mt-5 text-white'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;