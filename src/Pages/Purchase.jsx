import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init.js';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const [minimumOrder, setminOrder] = useState(0);
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  const [maxOrder, setmaxOrder] = useState(0);
  const [disaBled, setDisabled] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://ss-manu09.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {setProduct(data)
                        setminOrder(data.minimumorder)
                        setmaxOrder(data.stock)
                      });
  }, [id]);

  const handleOrder = (event) => {
    event.preventDefault();

    const order = {
        productId: product._id,
        productName: product.name,
        quantity:event.target.orderName.value,
        email: user.email,
        userName: user.displayName,
        phone: number,
        address: address,
        price: parseInt(product.price) * parseInt(event.target.orderName.value)
    }

    console.log(order);
    fetch('https://ss-manu09.herokuapp.com/order', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast('Order Successful')
            }
            else{
                toast.error(`Order Faild`)
            }
 
    });
}

  if (product.length>1 ) {
    return <LoadingSpinner/>
}
  const checkQuantity= (e)=>{
      setminOrder(e.target.value)
      setmaxOrder(e.target.value)
      
        if(e.target.value >= product.minimumorder){
          if(disaBled){
            setDisabled(false)
        }
    }
      if(e.target.value < product.minimumorder){
          toast.error('Order cannot less then Minimum order')
          setDisabled(true)
          
      }
      if(e.target.value > product.stock){
        toast.error('Your Order cannot greater then Our Stock')
        setDisabled(true)
      }
     
  }
    return (
      <section className="text-gray-600 body-font  my-28">
        <div className="container px-5  mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
            <div className=" lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3"><b>Available:</b> {product.stock} Pieces</span>

                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3"><b>Min. Order: </b>{product.minimumorder} Pieces</span>
                </div>
              </div>
                <span className="title-font font-medium text-2xl text-gray-900"><b>Prices: </b>${product.price} Per Piece</span>
              <div className="">
            <section className="text-gray-600 body-font">
              <div className="container  py-10 mx-auto flex flex-wrap items-center">
            <form onSubmit={handleOrder}>

         
              <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Order Quantity</h2>
              <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Order Quantity</label>
              
              <input onChange={checkQuantity} value={minimumOrder} type="number" id="orderName" name="orderName" min={product.minimumorder} className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>  
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Enter Your Information</h2>
              <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">User Name</label>
              <input placeholder={user?.displayName} type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled />
              </div>
              <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input placeholder={user?.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled />
              </div>
              <div className="relative mb-4">
              <label htmlFor="address" className="leading-7 text-sm text-gray-600"> Address</label>
              <input onChange={(e)=>setAddress(e.target.value)}  placeholder="Address" type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-4">
              <label htmlFor="phone_number" className="leading-7 text-sm text-gray-600">Phone number</label>
              <input  onChange={(e)=>setNumber(e.target.value)} placeholder="Phone number" type="text" id="phone_number" name="phone_number"  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button  className={ disaBled ? "bg-pink-200 text-white  border-0 py-2 px-8 focus:outline-none hover:bg-pink-700 rounded text-lg":"bg-pink-500 text-white  border-0 py-2 px-8 focus:outline-none hover:bg-pink-700 rounded text-lg" } disabled={ disaBled ? 'disabled' :''}>Make Order</button>
 
              </div>
              </form>
              </div>
            </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Purchase;