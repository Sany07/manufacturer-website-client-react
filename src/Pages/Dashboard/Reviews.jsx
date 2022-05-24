import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Reviews = () => {
    const [review, setReview] = useState([]) 
    const [rating, setRating] = useState(0) 
    const [user] = useAuthState(auth);

    const handleSubmit =(e)=>{

        const reviewData = {
            name : user.displayName,
            rating,
            review
        }

        e.preventDefault()
        fetch('https://ss-manufacturer.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast('Review Added Successfully')
                }
                else{
                    toast.error(`Somthing went wrong`)
                }
        });
    }


    return (
        <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Review</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -m-2">
             
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Rating</label>
                <input onChange={(e)=> setRating(e.target.value)} type="number" id="rating" min="0" max="5" name="rating" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Review</label>
                <textarea onChange={(e)=> setReview(e.target.value)} id="review" name="review" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Add</button>
            </div>
      
          </div>
        </form>
        </div>
      </div>
    );
};

export default Reviews;