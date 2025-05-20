import { Helmet } from "react-helmet-async";
import PageCover from "../../../Component/Shared/PageCover";
import productImg from '../../../assets/products/product-bg.jpg'
import ClothingImg from '../../../assets/products/Clothing-bg.jpg'
import electronicImg from '../../../assets/products/electronic-bg.jpg'
import sportImg from '../../../assets/products/sport-bg.jpg'
import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import PopularProducts from "../../../Component/PopularProducts/PopularProducts";
import { useEffect, useState } from "react";
import UseProducts from "../../../Hooks/UseProducts";
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
    const filterClothingData = data.filter(item => item.category === 'Clothing')
    console.log(filterClothingData)

    return (
        <div>
            <Helmet>
                <title>Britto Shop | Products</title>
            </Helmet>
            <PageCover img={productImg} tittle='Our Products' description='Explore our wide range of premium products designed to meet all your needs with quality and style.'></PageCover>
            <SectionTittle subHeading='Do not miss' heading='Todays Offer'></SectionTittle>
            <PopularProducts ></PopularProducts>
            <PageCover img={ClothingImg} tittle='Clothing' description='Trendy and comfortable apparel for every style and season.'></PageCover>
            <PageCover img={electronicImg} tittle='Electronic' description='Latest gadgets and smart devices to power your digital lifestyle.'></PageCover>
            <PageCover img={sportImg} tittle='sports' description='Gear up with top-quality equipment and apparel for every sport and fitness need.'></PageCover>
        </div>
    );
};

export default Product;