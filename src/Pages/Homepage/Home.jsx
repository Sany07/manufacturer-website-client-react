import React from 'react';
import Banner from './Banner';
import Counter from './Counter';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Counter/>
            <Reviews/>

        </div>
    );
};

export default Home;