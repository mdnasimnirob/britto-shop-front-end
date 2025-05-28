import { useState } from "react";
import OrderCard from "../../../Component/OrderCard/OrderCard";
import PageCover from "../../../Component/Shared/PageCover";
import UseProducts from "../../../Hooks/UseProducts";
import orderimg from "../../../assets/Orders/imgorder.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { useParams } from "react-router-dom";

const Orders = () => {
  const [data] = UseProducts();
  // const { category } = useParams();
  const [tabIndex, setTabIndex] = useState(0);
  console.log(data);
  const category = data.map((item) => item.category);
  console.log(category);
  const uniqueCategory = [...new Set(data.map((item) => item.category))];
  console.log(uniqueCategory);

  return (
    <div>
      <PageCover
        img={orderimg}
        tittle="প্রোডাক্ট অর্ডার"
        description="আপনার পছন্দের পণ্য অর্ডার করুন সহজেই। অর্ডারের অগ্রগতি ট্র্যাক করুন এবং সময়মতো ডেলিভারি পান।"
      ></PageCover>

      <div className="my- mx-  lg:text-lg  border-none dark:text-white dark:bg-black">
        <Tabs selectedIndex={tabIndex} onSelect={(idx) => setTabIndex(idx)}>
          <TabList className="flex text-[10px] md:text-[20px] md:py-5 lg:text-lg lg:gap-10 md:gap-5 gap-1 lg:py-10 justify-center items-center dark:bg-black bg-white dark:text-white text-black ">
            {uniqueCategory.map((category, index) => (
              <Tab
                key={index}
                className={`cursor-pointer px-3 py-2 text-sm md:text-base lg:text-lg 
                  focus:outline-none focus:ring-0 
                  border-b-2 transition-colors duration-300
                  ${
                    tabIndex === index
                      ? "border-orange-500 text-orange-500"
                      : "border-transparent hover:border-orange-300 text-black dark:text-white"
                  }`}
              >
                {category}
              </Tab>
            ))}
          </TabList>

          {uniqueCategory.map((category, index) => (
            <TabPanel key={index}>
              {/* <h2>{category}</h2> */}
              <OrderCard
                products={data.filter((item) => item.category === category)}
              ></OrderCard>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Orders;
