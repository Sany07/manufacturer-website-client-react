import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import ProductTable from '../../Components/ProductTable';
import TableRow from '../../Components/TableRow';

const ManageProduct = () => {

    const { data:products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products', {
        method: 'GET',
    }).then(res => res.json()));
    


    return (
        <div>
            <h2 className="text-2xl">Total Users: {products?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Minimum Order</th>
                            <th>Available Quantity</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           products?.map((product,index)=><ProductTable
                           key={product._id}
                           index={index}
                           product={product}
                           refetch={refetch}
                           ></ProductTable>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;