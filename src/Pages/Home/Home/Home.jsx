import React from "react";
import Banner from "../Banner/Banner";
import Cover from "../../../Component/Shared/Cover";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import { Helmet } from "react-helmet-async";
import UseProducts from "../../../Hooks/UseProducts";
import ProductsCategory from "../../../Component/ProductsCategory/ProductsCategory";
import SectionTittle from "../../../Component/SectionTittle/SectionTittle";

const Home = () => {
  const [data] = UseProducts();
  const popularData = data.filter((item) => item.category === "Popular");
  return (
    <div>
      <Helmet>
        <title>Britto Shop | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <SectionTittle subHeading='Popular Product' heading='Our Popular Products' ></SectionTittle>
      {/* <div class="flex text-center justify-center text-white font-semibold">
        <p class="bg-blue-500 w-48 h-9 py-1 text-xl  [clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)] mr-[-40px]">
          Buy Now
        </p>
        <p class="bg-yellow-500 w-48 h-9 py-1 text-xl [clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)]">
          Add to Cart
        </p>
      </div> */}
      <div className="mt-10">
        <ProductsCategory data={popularData}></ProductsCategory>
      </div>
      
      <Feature></Feature>
      <div className="">
        <Cover />
      </div>
    </div>
  );
};

export default Home;
