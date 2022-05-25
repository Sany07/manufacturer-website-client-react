import React from 'react';
import Banner from './Banner';
import Counter from './Counter';
import Dealar from './Dealar';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Counter/>
            <Reviews/>
            <Dealar/>
        </div>
    );
};

export default Home;