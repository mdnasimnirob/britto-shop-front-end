import React from 'react';
import Banner from '../Banner/Banner';
import Cover from '../../../Component/Shared/Cover';
import Category from '../Category/Category';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Cover/>
        </div>
    );
};

export default Home;