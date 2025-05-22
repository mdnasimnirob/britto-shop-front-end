import { Helmet } from "react-helmet-async";
import PageCover from "../../../Component/Shared/PageCover";
import productImg from '../../../assets/products/product-bg.jpg'
import ClothingImg from '../../../assets/products/Clothing-bg.jpg'
import electronicImg from '../../../assets/products/electronic-bg.jpg'
import sportImg from '../../../assets/products/sport-bg.jpg'
import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import { useEffect, useState } from "react";
import UseProducts from "../../../Hooks/UseProducts";
import ProductsCategory from "../../../Component/ProductsCategory/productsCategory";
// import { useLoaderData } from "react-router-dom";

const Product = () => {
    // const allProductData = useLoaderData()
    // console.log(allProductData)
    // const [data, setData] = useState([]);
    // console.log(data)
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //         const filterPopularData = data.filter(item => item.category === 'popular')
    //         console.log(filterPopularData)
    //     })
    // },[])

    const [data] = UseProducts();
    const popularData = data.filter(item => item.category === 'popular')
    const ClothingData = data.filter(item => item.category === 'Clothing')
    const ElectronicsData = data.filter(item => item.category === 'Electronics')
    const HomeKitchenData = data.filter(item => item.category === 'Home & Kitchen')
    const SportsData = data.filter(item => item.category === 'Sports')

    return (
        <div>
            <Helmet>
                <title>Britto Shop | Products</title>
            </Helmet>
            <PageCover img={productImg} tittle='Our Products' description='Explore our wide range of premium products designed to meet all your needs with quality and style.'></PageCover>
            <SectionTittle subHeading="Don't miss" heading='Todays Offer'></SectionTittle>
            <ProductsCategory data={popularData} ></ProductsCategory>
            <PageCover img={ClothingImg} tittle='Clothing' description='Trendy and comfortable apparel for every style and season.'></PageCover>
            <ProductsCategory data={ClothingData} ></ProductsCategory>
            <PageCover img={electronicImg} tittle='Electronic' description='Latest gadgets and smart devices to power your digital lifestyle.'></PageCover>
            <ProductsCategory data={ElectronicsData} ></ProductsCategory>
            <PageCover img={sportImg} tittle='sports' description='Gear up with top-quality equipment and apparel for every sport and fitness need.'></PageCover>
            <ProductsCategory data={SportsData} ></ProductsCategory>
        </div>
    );
};

export default Product;