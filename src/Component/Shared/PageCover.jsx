import { Parallax } from "react-parallax";

const PageCover = ({ img, tittle, description }) => {
  return (

      <Parallax
        blur={{ min: -20, max: 20 }}
        bgImage={img}
        bgImageAlt="The Products"
      >
    
        <div className="hero" style={{ height: "600px" }}>
          <div className="hero-overlay bg-opacity-60 bg-black"></div>
          <div className="hero-content  text-neutral-content text-center flex-col lg:flex-row lg:gap-9 gap-2">
          
            <div className="lg:max-w-2xl max-w-md px-0 lg:px-28  bg-white bg-opacity-10 ">
              <h1 className="mb-4 mt-16 lg:text-5xl text-4xl font-bold text-orange-500 uppercase">
                {tittle}
              </h1>
              <p className="mb-10 text-[14px]">
                {description}
              </p>
              {/* <button className="btn btn-outline border-b-4 text-orange-500 border-0">
                Read More
              </button> */}
            </div>
          </div>
        </div>
      </Parallax>

  );
};

export default PageCover;
