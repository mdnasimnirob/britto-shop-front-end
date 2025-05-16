import { Helmet } from "react-helmet-async";
import PageCover from "../../../Component/Shared/PageCover";
import productImg from '../../../assets/products/product-bg.jpg'

const Product = () => {
    return (
        <div>
            <Helmet>
                <title>Britto Shop | Products</title>
            </Helmet>
            <PageCover img={productImg}></PageCover>
        </div>
    );
};

export default Product;