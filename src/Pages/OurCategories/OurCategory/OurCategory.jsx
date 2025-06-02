import React from "react";
import OrderCard from "../../../Component/OrderCard/OrderCard";
import UseProducts from "../../../Hooks/UseProducts";
import { useParams } from "react-router-dom";
import PageCover from "../../../Component/Shared/PageCover";

const OurCategory = () => {
  const [data] = UseProducts();
  const { category } = useParams();

  if (!data || !category) return <div>Loading...</div>;

  const filteredProducts = data.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No products found in "{category}"
      </div>
    );
  }
    console.log(filteredProducts);
  return (
    <div className="">
      <PageCover img={filteredProducts[0].image} tittle={filteredProducts[0].category} description='বিভিন্ন ক্যাটাগরির পণ্য এক জায়গায়—ইলেকট্রনিক্স, পোশাক, বাসার সামগ্রী, বিউটি প্রোডাক্টস, খেলনা ও আরও অনেক কিছু সহজে খুঁজে নিন।'></PageCover>
      <div className="mx-0.5 my-2">
        <OrderCard products={filteredProducts} />
      </div>
    </div>
  );
};

export default OurCategory;
