import { Helmet } from "react-helmet-async";
import PageCover from "../../../Component/Shared/PageCover";
import cartImg from '../../../assets/cart/CartBg.jpg'

const Cart = () => {
    return (
        <div>
            <Helmet>
                <title>Britto Shop | Cart</title>
            </Helmet>
            <div>
                <PageCover img={cartImg} tittle='সমস্ত কার্ট প্রোডাক্ট' description='আপনার কার্টে থাকা সমস্ত পণ্যের তালিকা'></PageCover>
            </div>
            
        </div>
    );
};

export default Cart;