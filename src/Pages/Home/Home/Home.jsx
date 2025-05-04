import React from 'react';
import Banner from '../Banner/Banner';
import Cover from '../../../Component/Shared/Cover';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Feature></Feature>
            <Cover/>
        </div>
    );
};

export default Home;