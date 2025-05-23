import UseProducts from "../../Hooks/UseProducts";


const OrderCard = ({products}) => {
    // const [data] = UseProducts();
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-3">
                {products
                  .map((product) => (
                    <div className="card bg-base-100  shadow-md ">
                      <figure>
                        <img
                          className="object-cover h-72 w-full"
                          src={product.image}
                          alt={product.name}
                        />
                        <p className="absolute right-0 top-0 bg-[#ff0066] text-white rounded-md p-1">$ {product.price}</p>
                      </figure>
                      <div className="card-body text-center flex items-start">
                        <h2 className="card-title">{product.name}</h2>
                        <p className="text-start">{product.description}</p>
                        <div className="card-actions justify-end w-full">
                          <button className="btn bg-[#ff0066] w-full text-lg ">Order Now</button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
    );
};

export default OrderCard;