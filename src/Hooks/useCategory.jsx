import UseProducts from "./UseProducts";


const useCategory = () => {
    const [data] = UseProducts();
    const uniqueCategory = [...new Set(data.map((item) => item.category))];
    return uniqueCategory;
};

export default useCategory;