import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const { data: product, isLoading } = useQuery('product', () => fetch('https://secret-dusk-46242.herokuapp.com/service').then(res => res.json()))

    const onSubmit = async data => {
        fetch('https://ss-manufacturer.herokuapp.com/product', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if(data.status===201){
                    reset()
                    toast.success('Product Added Successful')
                }
                else{
                    toast.error('Something went wrong')
                }
     
        });
    }      
    
        // if (isLoading) {
        //     return <LoadingSpinner />;
        //   }

    return (
        <div className='mt-28 flex justify-center items-center'>
            
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Product</h2>
                    <div className="divider"></div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Enter Product Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Enter Product Name'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="link"
                                placeholder="http://"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Enter Product Image'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                {errors.image?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                name="number"
                                placeholder='Enter Product Price'
                                className="input input-bordered w-full max-w-xs"
                                {...register("number", {
                                    required: {
                                        value: true,
                                        message: 'Enter Product Price'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                                {errors.number?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Stocks</span>
                            </label>
                            <input
                                type="number"
                                name="stocks"
                                placeholder='Enter Product Stock'
                                className="input input-bordered w-full max-w-xs"
                                {...register("stock", {
                                    required: {
                                        value: true,
                                        message: 'Enter Product Stock'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.stock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                                {errors.stock?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order</span>
                            </label>
                            <input
                                type="number"
                                name="minimumorder"
                                placeholder='Enter  Minimum Order'
                                className="input input-bordered w-full max-w-xs"
                                {...register("minimumorder", {
                                    required: {
                                        value: true,
                                        message: 'Enter Minimum Order'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.stock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                                {errors.stock?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description
 Order</span>
                            </label>
                            <textarea class="textarea textarea-bordered"
                                name="description"
                                placeholder='Enter  Product Description
                                '
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Enter Product Description'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.stock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                                {errors.stock?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-primary text-white w-full max-w-xs text-white' type="submit" value="Add Product" />
                    </form>
   
                    <div className="divider"></div>
                </div>
            </div>
        </div >
    );
};

export default AddProduct;