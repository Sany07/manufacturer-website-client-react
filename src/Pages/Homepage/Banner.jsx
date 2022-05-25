import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
        <div class='hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16'>
            <div class='hero-content flex-col lg:flex-row'>
            <div>
                <p
                data-aos='fade-right'
                data-aos-duration='1000'
                data-aos-delay='200'
                className='text-xl'
                >
                Best Quality
                </p>
                <h1
                data-aos='fade-right'
                data-aos-delay='400'
                data-aos-duration='900'
                class='text-5xl font-bold'
                >
                Electric Saw Collection
                </h1>
                <p
                data-aos='fade-right'
                data-aos-delay='600'
                data-aos-duration='800'
                class='py-6 max-w-xl'
                >
                We provide best Electric Saw. We also accept Custom order. Contact Us
                </p>
                <button
                data-aos='zoom-in'
                data-aos-delay='1300'
                class='btn btn-primary text-white'
                >
                Buy Now
                </button>
            </div>
            <div className='h-[60vh] shrink-0 mt-10'>
                <img src="https://img.freepik.com/free-vector/gradient-sale-background_23-2148934477.jpg" class='' alt='' />
            </div>
            </div>
        </div>
        <div className='rounded-2xl mx-auto mt-[-50px] relative z-20 bg-base-200 shadow-lg p-10 w-5/6'>
            <h1 className='text-2xl mb-5 text-primary'>Get Amazing Deals</h1>
            <div className=''>
            <input
                type='email'
                placeholder='Enter Your Email'
                class='input input-bordered w-full'
            />

            </div>
            <button className='btn btn-primary mt-5 text-white'>Subscribe</button>
        </div>
    </div>
    );
};

export default Banner;