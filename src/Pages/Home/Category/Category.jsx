import { useRef, useState, useEffect } from 'react';
import img1 from '../../../assets/t-shart/download (2).jpeg';
import img2 from '../../../assets/t-shart/images (1).jpeg';
import img3 from '../../../assets/t-shart/images (2).jpeg';
import img4 from '../../../assets/t-shart/images (3).jpeg';
import img5 from '../../../assets/t-shart/images.jpeg';
import SectionTittle from '../../../Component/SectionTittle/SectionTittle';

const Category = () => {
  const categories = [
    { name: 'Electronic', image: img1 },
    { name: 'Clothing', image: img2 },
    { name: 'Kitchen', image: img3 },
    { name: 'Beauty', image: img4 },
    { name: 'Sport', image: img5 },
    { name: 'Toys', image: img5 },
    { name: 'Popular', image: img5 },
    { name: 'Combo', image: img5 },
    { name: 'Combo', image: img5 },
    { name: 'Combo', image: img5 },
    { name: 'Combo', image: img5 },
  ];

  const scrollRef = useRef();
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const handleScroll = () => {
    const current = scrollRef.current;
    const scrollLeft = current.scrollLeft;
    const scrollWidth = current.scrollWidth;
    const clientWidth = current.clientWidth;

    // Show/hide left button
    setShowLeftButton(scrollLeft > 0);

    // Show/hide right button
    if (scrollLeft + clientWidth >= scrollWidth - 1) {
      setShowRightButton(false);
    } else {
      setShowRightButton(true);
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -864, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 864, behavior: 'smooth' });
  };

  useEffect(() => {
  const current = scrollRef.current;
  current.addEventListener('scroll', handleScroll);

  // Run once to update buttons based on initial scroll position
  handleScroll();

  return () => {
    current.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (
    <section>
      <SectionTittle subHeading="from 10am to 11pm" heading="ONLINE ORDER" />

      <div className="relative">
        {/* Left Button */}
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80  text-white px-3 py-2 rounded-full z-10"
          >
            &#8592;
          </button>
        )}

        {/* Right Button */}
        {showRightButton && (<button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-full z-10"
        >
          &#8594;
        </button>)}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth flex space-x-4 p-4"
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[300px] bg-gray-100 relative flex items-center justify-center rounded-lg overflow-hidden shrink-0"
            >
              <img
                src={item.image}
                alt={`t-shirt-${index}`}
                className="w-[200px] h-[300px] object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
