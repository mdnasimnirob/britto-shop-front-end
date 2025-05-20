import UseProducts from "../../Hooks/UseProducts";
import ProductsItem from "../Shared/ProductsItem/ProductsItem";


const PopularProducts = () => {
  const [data] = UseProducts();
  const filterPopularData = data.filter(item => item.category === 'popular')
            console.log(filterPopularData)
  return (
    <div>
        <section>
          <div className="grid grid-cols-2 gap-2 my-5 mx-2">
            {
              filterPopularData.map(data => (
                <ProductsItem key={data._id} data={data} >

                </ProductsItem>
              ))
            }
          </div>
        </section>
    </div>
  );
};

export default PopularProducts;
