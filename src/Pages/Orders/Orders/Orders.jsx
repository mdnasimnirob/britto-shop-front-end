import OrderCard from "../../../Component/OrderCard/OrderCard";
import PageCover from "../../../Component/Shared/PageCover";
import UseProducts from "../../../Hooks/UseProducts";
import orderimg from "../../../assets/Orders/imgorder.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Orders = () => {
  const [data] = UseProducts();
  // console.log(data);
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

      <div className="my-7 mx-3 grid items-center text-center  border-none ">
        <Tabs>
          <TabList>
            {uniqueCategory.map((category, index) => (
              <Tab key={index}>{category}</Tab>
            ))}
          </TabList>

          {uniqueCategory.map((category, index) => (
            <TabPanel key={index}>
              {/* <h2>{category}</h2> */}
              <OrderCard products={data.filter(item => item.category === category)} ></OrderCard>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Orders;
