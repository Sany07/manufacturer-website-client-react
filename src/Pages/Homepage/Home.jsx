import React from 'react';
import Banner from './Banner';
import Counter from './Counter';
import Reviews from './Reviews';
import Services from './Services';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Counter/>
            <Reviews/>

        </div>
    );
};

export default Home;