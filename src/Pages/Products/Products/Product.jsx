import { Helmet } from "react-helmet-async";
import PageCover from "../../../Component/Shared/PageCover";
import productImg from "../../../assets/products/product-bg.jpg";
import ClothingImg from "../../../assets/products/Clothing-bg.jpg";
import electronicImg from "../../../assets/products/electronic-bg.jpg";
import sportImg from "../../../assets/products/sport-bg.jpg";
import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import { useEffect, useState } from "react";
import UseProducts from "../../../Hooks/UseProducts";
import ProductsCategory from "../../../Component/ProductsCategory/productsCategory";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();
  const [data] = UseProducts();
  const popularData = data.filter((item) => item.category === "Popular");
  const ClothingData = data.filter((item) => item.category === "Clothing");
  const ElectronicsData = data.filter(
    (item) => item.category === "Electronics"
  );
  const HomeKitchenData = data.filter(
    (item) => item.category === "Home & Kitchen"
  );
  const SportsData = data.filter((item) => item.category === "Sports");
  const KitchenData = data.filter((item) => item.category === "Kitchen");
  const ToysData = data.filter((item) => item.category === "Toys");
  const BeautyData = data.filter((item) => item.category === "Beauty");

  return (
    <div>
      <div>
        <Helmet>
          <title>
            {t("Britto Shop")} | {t("Products")}
          </title>
        </Helmet>

        <PageCover
          img={productImg}
          tittle={t("Our Products")}
          description={t(
            "Explore our wide range of premium products designed to meet all your needs with quality and style."
          )}
        />

        <SectionTittle
          subHeading={t("Don't miss")}
          heading={t("Todays Offer")}
        />
        <ProductsCategory data={popularData} />

        <PageCover
          img={ClothingImg}
          tittle={t("Clothing")}
          description={t(
            "Trendy and comfortable apparel for every style and season."
          )}
        />
        <ProductsCategory data={ClothingData} />

        <PageCover
          img={electronicImg}
          tittle={t("Electronics")}
          description={t(
            "Latest gadgets and smart devices to power your digital lifestyle."
          )}
        />
        <ProductsCategory data={ElectronicsData} />

        <PageCover
          img={sportImg}
          tittle={t("Sports")}
          description={t(
            "Gear up with top-quality equipment and apparel for every sport and fitness need."
          )}
        />
        <ProductsCategory data={SportsData} />

        <PageCover
          img={sportImg}
          tittle={t("Kitchen")}
          description={t(
            "Cook smart with quality tools and modern kitchen essentials."
          )}
        />
        <ProductsCategory data={KitchenData} />

        <PageCover
          img={sportImg}
          tittle={t("Toys")}
          description={t(
            "Fun, educational, and safe toys for children of all ages."
          )}
        />
        <ProductsCategory data={ToysData} />

        <PageCover
          img={sportImg}
          tittle={t("Beauty")}
          description={t(
            "High-quality beauty and personal care products to enhance your natural glow."
          )}
        />
        <ProductsCategory data={BeautyData} />
      </div>
    </div>
  );
};

export default Product;
