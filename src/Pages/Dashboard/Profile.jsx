import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const Profile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data:profile, isLoading, refetch } = useQuery('profile', () => fetch('http://localhost:5000/userupdate', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
    }).then(res => res.json()));
    if (isLoading ) {
        return <LoadingSpinner/>
    }

    
    const onSubmit = (data) => {
        const url = "http://localhost:5000/userupdate";
        fetch(url, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },

          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.status === 201) {
              toast.success("Profile Updated!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId: "success1",
              });
              refetch()
            }else{
                toast.error("Profile Updated!" )
            }
          });
      };

   
    return (
        <>

            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-left">
      <div class="sm:w-1/2 mb-10 px-4">
        {/* ss */}
        <div className="ml-10 lg:w-2/2 md:w-1/2 md:pr-10 md:py-6">
                    <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"><b>User Name: </b></h2>
                        <h1 className="font-medium title-font text-sm text-gray-900 mt-3 tracking-wider">{user.displayName}</h1>
             
                    </div>
                    </div>
                    <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"><b>Email :</b></h2>
                        <p className="leading-relaxed">{ user.email }</p>
                    </div>
                    </div>
                    <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx={12} cy={5} r={3} />
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"><b>Education :</b></h2>
                        <p className="leading-relaxed">{profile[0].education} </p>
                    </div>
                    </div>                 
                    <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"><b>City :</b></h2>
                        <p className="leading-relaxed">{profile[0].city}</p>
                    </div>
                    </div>
                    <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"><b>Linked In:</b> {profile[0].linkedin}</h2>
                        <p className="leading-relaxed"></p>
                    </div>
                    </div>
                    <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"><b>Phone Number :</b> </h2>
                        <p className="leading-relaxed">{profile[0].phone}</p>
                    </div>
                    </div>
        </div>
      </div>
      <div class="sm:w-1/2 mb-10 px-4  shadow-md">
        {/* ss */}
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Education :</label>
                <input type="text" id="education" name="education" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("education") }/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="city" className="leading-7 text-sm text-gray-600">City :</label>
                <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("city", )}/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="linkedin" className="leading-7 text-sm text-gray-600">Linked In :</label>
                <input type="link" placeholder='https://' id="linkedin" name="linkedin" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("linkedin", )}/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone :</label>
                <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("phone", )} />
            </div>
            <button className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Update</button>
            </form>
      </div>
    </div>
  </div>
</section>

        </>
    );
};

export default Profile;