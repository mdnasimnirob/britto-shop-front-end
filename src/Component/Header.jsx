import React from 'react';
import banner from '../assets/banner.jpg';
import { Parallax } from 'react-parallax';

const Header = () => {
    return (
        <>
            <Parallax
                blur={{ min: -30, max: 30 }}
                bgImage={banner}
                bgImageAlt="A scenic background"
               
            >
                <div className='hero ' style={{ height: '600px' }}>
                <div className="hero-overlay bg-opacity-60 bg-black"></div>
                <div  className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">Britto Shop</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                </div>
            </Parallax>
        </>
    );
};

export default Header;
