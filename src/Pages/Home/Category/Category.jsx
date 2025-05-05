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
    const categories = [
        { name: 'Casual T-Shirt', image: img1 },
        { name: 'Formal Shirt', image: img2 },
        { name: 'Print T-Shirt', image: img3 },
        { name: 'Plain T-Shirt', image: img4 },
        { name: 'Stylish Tee', image: img5 },
    ];
    return (
        <section className=''>
            <SectionTittle
                subHeading={'from 10am to 11pm'}
                heading={'ONLINE ORDER'}
            >
            </SectionTittle>

            <Swiper

                slidesPerView={4}
                spaceBetween={20}
                // centeredSlides={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="mySwiper mb-24 "
            >
                {categories?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[350px] bg-gray-100 p-0.5 flex items-center justify-center ">
                            <img
                                src={item.image}
                                alt={`t-shirt-${index}`}
                                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                            />
                            <p className='text-gray-100 opacity-80 fixed bottom-9 lg:text-2xl uppercase font-normal text-xl'>{item.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Category;
