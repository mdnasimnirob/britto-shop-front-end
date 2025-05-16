import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 flex lg:flex-row flex-col md:flex-row justify-around items-center h-full">
                <aside className="">
               {/* <h1 className="uppercase text-center w-full  p-2 ">Contact Us</h1> */}
               <h1 className="uppercase text-center w-full text-xl text-orange-500">ব্রিট্টো শপ</h1>
                    <p>
                        Chartola Mor, College Road, Rangpur
                        <br />
                    </p>
                     <h1 className=" text-center w-full ">Phone : +8801757-706811</h1>
                     <h1 className=" text-center w-full ">Email : mdnasimnirob4650@gmail.com</h1>
                     <h1 className=" text-center w-full ">Weekdays : 9:00 AM - 6:00 PM</h1>
                     <h1 className=" text-center w-full ">weekends : 10:00 AM - 4:00 PM</h1>
                </aside>
                <nav className="">
                    <h1 className="text-xl p-2 text-center w-full">Follow US</h1>
                    <h6 className="footer-title">Join us on Social Media</h6>
                    <div className="grid grid-flow-col gap-8 w-full  px-5">
                        <a href="https://github.com/mdnasimnirob" target="_blank">
                            <FaGithub className=" w-6 h-6" />

                        </a>
                        <a href="https://www.linkedin.com/in/nasim-nirob/" target="_blank">
                            <IoLogoLinkedin className="w-6 h-6  text-white" />

                        </a>
                        <a href="https://www.facebook.com/nasim.nirob.dev" target="_blank" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
               
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-neutral text-base-content p-4 text-white">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-blue-600">Britto Shop</span></p>
                    </aside>
                </footer>
        </>
    );
};

export default Footer;