import { useRef, useState, useEffect } from "react";
import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import UseProducts from "../../../Hooks/UseProducts";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [data] = UseProducts();
  const navigate = useNavigate();

  // 1. Get unique categories dynamically
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // 2. Map categories to objects with name + first product image
  const categoriesToShow = uniqueCategories.map((categoryName) => {
    const firstProduct = data.find((item) => item.category === categoryName);
    return {
      name: categoryName,
      image: firstProduct
        ? firstProduct.image
        : "https://via.placeholder.com/200x300?text=No+Image",
    };
  });

  // 2. For each category, find the latest product image
  // const categoriesToShow = uniqueCategories.map((categoryName) => {
  //   const products = data.filter((item) => item.category === categoryName);
  //   const latestProduct = products[products.length - 1]; // Last item = latest

  //   return {
  //     name: categoryName,
  //     image: latestProduct
  //       ? latestProduct.image
  //       : "https://via.placeholder.com/200x300?text=No+Image",
  //   };
  // });

  const scrollRef = useRef();
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  // const handleScroll = () => {
  //   const el = scrollRef.current;
  //   setShowLeftButton(el.scrollLeft > 0);
  //   setShowRightButton(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  // };

  const handleScroll = () => {
  const el = scrollRef.current;
  // console.log({
  //   scrollLeft: el.scrollLeft,
  //   clientWidth: el.clientWidth,
  //   scrollWidth: el.scrollWidth
  // });
  setShowLeftButton(el.scrollLeft > 0);
  setShowRightButton(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
};


  const smoothScroll = (distance, duration = 500) => {
    const el = scrollRef.current;
    const start = el.scrollLeft;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.scrollLeft = start + distance * progress;
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const scrollLeft = () => smoothScroll(-600, 700);
  const scrollRight = () => smoothScroll(600, 700);

  // useEffect(() => {
  //   const el = scrollRef.current;
  //   el.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => el.removeEventListener("scroll", handleScroll);
  // }, []);

 useEffect(() => {
  const el = scrollRef.current;
  el.addEventListener("scroll", handleScroll);

  // Use requestAnimationFrame to ensure layout is ready
  const raf = requestAnimationFrame(() => {
    handleScroll();
  });

  return () => {
    el.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(raf);
  };
}, [data]);  // IMPORTANT: Run this after 'data' changes too


  
  return (
    <section>
      <SectionTittle subHeading="from 10am to 12pm" heading="ONLINE ORDER" />

      <div className="relative">
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full z-10 text-2xl shadow-lg hover:bg-black/70 transition"
            aria-label="Scroll Left"
          >
            <SlArrowLeft />
          </button>
        )}

        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full z-10 text-2xl shadow-lg hover:bg-black/70 transition"
            aria-label="Scroll Right"
          >
            <SlArrowRight />
          </button>
        )}

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide flex space-x-4 p-4"
          role="list"
        >
          {categoriesToShow.map((category, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/category/${category.name}`)}
              className="min-w-[200px] h-[300px] bg-gray-100 relative flex items-center justify-center rounded-lg overflow-hidden shrink-0 hover:shadow-sm  hover:shadow-orange-500 hover:scale-105 duration-700 transition-transform"
              role="listitem"
            >
              <img
                src={category.image}
                alt={`${category.name} category`}
                className="w-[200px] h-[300px] object-cover brightness-75"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <button className="btn btn-outline border-b-2 text-white border-0 flex items-center text-2xl text-center">
                  {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
