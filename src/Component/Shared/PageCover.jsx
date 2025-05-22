import { Parallax } from "react-parallax";

const PageCover = ({ img, tittle, description }) => {
  return (

      <Parallax
        blur={{ min: -20, max: 20 }}
        bgImage={img}
        bgImageAlt={tittle}
      >
    
        <div className="hero" style={{ height: "600px" }}>
          <div className="hero-overlay bg-opacity-60 bg-black"></div>
          <div className="hero-content  text-neutral-content text-center flex-col lg:flex-row lg:gap-9 gap-2">
          
            <div className="lg:max-w-2xl max-w-md px-0 lg:px-16  bg-white bg-opacity-10 ">
              <h1 className="  mb-4 mt-16 lg:text-5xl text-4xl font-bold text-orange-500 uppercase">
                {tittle}
              </h1>
              <p className="mb-10 text-[14px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Parallax>

  );
};

export default PageCover;
