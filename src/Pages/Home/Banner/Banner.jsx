import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/banner/beautiful-asian.jpg'
import img2 from '../../../assets/banner/excited-girl-open-up.jpg'
import img3 from '../../../assets/banner/low-angle.jpg'
import img4 from '../../../assets/banner/satisfied-young-black.jpg'
import img5 from '../../../assets/banner/portrait-young.jpg'


const Banner = () => {

    return (
        <Carousel

            showStatus={false}
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            autoFocus={true}
            showArrows={true}
            useKeyboardArrows={true}
            renderThumbs={() =>
                [img1, img2, img3, img4, img5].map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumb ${index + 1}`}
                        className="object-cover border border-gray-300 hover:border-blue-500 cursor-pointer"
                    />
                ))
            }

        >
            <div className="w-full lg:h-svh flex items-center justify-center">
                <img src={img1} alt="Image 1" />
            </div>
            <div className="w-full lg:h-svh flex items-center justify-center">
                <img src={img2} alt="Image 2" />
            </div>
            <div className="w-full lg:h-svh flex items-center justify-center">
                <img src={img3} alt="Image 3" />
            </div>
            <div className="w-full lg:h-svh flex items-center justify-center">
                <img src={img4} alt="Image 4" />
            </div>
            <div className="w-full lg:h-svh  object-cover flex items-center justify-center">
                <img src={img5} alt="Image 5" />
            </div>
        </Carousel>

    );
};

export default Banner;