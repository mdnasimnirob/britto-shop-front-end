import { useState } from "react";
import OrderCard from "../../../Component/OrderCard/OrderCard";
import PageCover from "../../../Component/Shared/PageCover";
import UseProducts from "../../../Hooks/UseProducts";
import orderimg from "../../../assets/Orders/imgorder.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { useParams } from "react-router-dom";
// import "react-tabs/style/react-tabs.css";

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
          <TabList className='flex text-[10px] md:text-[20px] md:py-5 lg:text-lg lg:gap-10 md:gap-5 gap-1 lg:py-10 justify-center items-center dark:text-white'>
            {uniqueCategory.map((category, index) => (
              <Tab 
              key={index}
              className={`px-0.5 hover:border-b-2 hover:duration-500  lg:py-2 cursor-pointer ${
                tabIndex === index ? 'dark:bg-black text-orange-500 bg-blue border-b-2   border-b-orange-500 dark:border-blue-500  dark:text-blue-500 px- py-2' : 'hover:border-b-orange-500  bg-white px- py-2 dark:border-blue-500 dark:bg-black'
              }`}
              >{category}</Tab>
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
