import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/t-shart/download (2).jpeg'
import img2 from '../../../assets/t-shart/images (1).jpeg'
import img3 from '../../../assets/t-shart/images (2).jpeg'
import img4 from '../../../assets/t-shart/images (3).jpeg'
import img5 from '../../../assets/t-shart/images.jpeg'
import { Pagination } from 'swiper/modules';
import SectionTittle from '../../../Component/SectionTittle/SectionTittle';

const Category = () => {
    const images = [img1, img2, img3, img4, img5];
    return (
        <section className='mx-7'>
            <SectionTittle
                subHeading={'on time'}
                heading={'ONLINE ORDER'}
            >
            </SectionTittle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                {images?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[250px] bg-slate-300 p-1 flex items-center justify-center hover:translate-x-1">
                            <img src={img} alt={`t-shirt-${index}`} className="w-full h-full object-cover rounded" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Category;