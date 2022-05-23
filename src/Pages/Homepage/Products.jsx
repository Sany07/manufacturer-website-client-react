import React from 'react';
import Product from './Product';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';


const Products = () => {
    const { data:products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products', {
        method: 'GET',
    }).then(res => res.json()));
    if (isLoading ) {
        return <LoadingSpinner/>
    }
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Products</h3>
                <h2 className='text-4xl'>Products We Sell</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product =><Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;