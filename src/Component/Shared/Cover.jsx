import React from 'react';

import { Parallax } from 'react-parallax';
import Banner from '../../assets/cover/banner.jpg'
import img2 from'../../assets/cover/istockphoto-1148925683-612x612.jpg'
import SectionTittle from '../SectionTittle/SectionTittle';


const Cover = () => {
    return (
        <>
            <Parallax
                blur={{ min: -30, max: 30 }}
                bgImage={Banner}
                bgImageAlt="A scenic background"
               
            >
                
                <div className='hero' style={{ height: '600px' }}>
                <SectionTittle></SectionTittle>
                <div className="hero-overlay bg-opacity-60 bg-black"></div>
                <div  className="hero-content text-neutral-content text-center">
                    <img className='w-1/2' src={img2} alt="" />
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">Britto Shop</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-outline border-b-4 text-orange-500 border-0">Read More</button>
                    </div>
                </div>
                </div>
            </Parallax>
        </>
    );
};

export default Cover;
