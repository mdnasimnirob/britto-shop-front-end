import React from 'react';
import Banner from '../Banner/Banner';
import Cover from '../../../Component/Shared/Cover';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Britto Shop | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <Feature></Feature>
            <div className=''>
                <Cover />
            </div>
        </div>
    );
};

export default Home;