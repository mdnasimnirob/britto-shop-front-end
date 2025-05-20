const ProductsItem = ({data}) => {
  return (
    <div>
      <div className=" flex  my-2">
          <div>
            <img className="w-60 h-28 rounded-full rounded-tl-none object-cover" src={data.image} alt="" />
          </div>
        <div className=" w-full  p-3">
          <div className=" flex justify-between gap-4 ">
            <h2 className="text-xl ">{data.name}  -------------------------</h2>
            <h2 className="text-orange-500">${data.price}</h2>
          </div>
          <div>
                    <p className=" mt-5">{data.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
