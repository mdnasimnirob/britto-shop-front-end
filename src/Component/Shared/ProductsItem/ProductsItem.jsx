const ProductsItem = ({ data }) => {
  return (
    <div>
      <div className=" flex  my-2 mx-">
        <div>
          <img
            className="w-60 h-28 rounded-full rounded-tl-none object-cover"
            src={data.image}
            alt=""
          />
        </div>
        <div className=" w-full  p-3 text-black dark:text-white">
          <div className=" flex justify-between lg:gap-4 gap-1 ">
            <h2 className="lg:text-xl ">{data.name}----</h2>
            <h2 className="text-orange-500">${data.price}</h2>
          </div>
          <div>
            <p className=" lg:mt-5 mt-2">{data.description} </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductsItem;
