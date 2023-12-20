import Image from "next/image";
import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <Image
        alt=""
        src={images[currentIndex]}
        height={200}
        width={500}
        className="h-[300px] w-[600px] m-auto my-2 object-cover rounded-md"
        layout="responsive"
      />
      <div className="absolute inset-y-0 left-0 flex items-center justify-center">
        <button
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 "
          onClick={handlePrev}
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-center">
        <button
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 focus:outline-none"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
