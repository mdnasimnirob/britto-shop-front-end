import React from 'react';
import Banner from '../Banner/Banner';
import Cover from '../../../Component/Shared/Cover';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';
import { Helmet } from 'react-helmet-async';
import UseProducts from '../../../Hooks/UseProducts';
import ProductsCategory from '../../../Component/ProductsCategory/productsCategory';


const Home = () => {
    const [data] = UseProducts();
    const popularData = data.filter(item => item.category === 'popular')
    return (
        <div>
            <Helmet>
                <title>Britto Shop | Home</title>
            </Helmet>
            <Banner />
            <div className='mt-10'>
                <ProductsCategory data={popularData} ></ProductsCategory>
            </div>
            <Category />
            <Feature></Feature>
            <div className=''>
                <Cover />
            </div>
        </div>
    );
};

export default Home;