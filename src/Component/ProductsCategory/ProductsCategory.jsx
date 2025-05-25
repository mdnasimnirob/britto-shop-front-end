import UseProducts from "../../Hooks/UseProducts";
import ProductsItem from "../Shared/ProductsItem/ProductsItem";


const ProductsCategory = ({data}) => {
  // const [data] = UseProducts();
  // const filterPopularData = data.filter(item => item.category === 'popular')
  //           console.log(filterPopularData)
  return (
    <div>
        <section>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-2 my-5 lg:mx-5 dark:text-white">
            {
              data.map(data => (
                <ProductsItem key={data._id} data={data} >

                </ProductsItem>
              ))
            }
          </div>
        </section>
        <div className="my-16 text-center items-center flex justify-center">

          <button className="btn btn-outline border-b-2 text-blue-500 border-0 flex items-center text-center text-">Find More Products</button>
        </div>
    </div>
  );
};

export default ProductsCategory;
