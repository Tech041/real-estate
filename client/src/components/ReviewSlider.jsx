import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    img: "/man1.jpg",
    review:
      "Reliable, transparent, and efficient.!",
    name: "James",
  },
  {
    id: 2,
    img: "/man2.jpg",
    review:
      "Amazing selection of properties! ",
    name: " Smith",
  },
  {
    id: 3,
    img: "/man3.jpg",
    review:
      "Smooth transaction and professional guidance.",
    name: "Michael ",
  },
  {
    id: 4,
    img: "/man4.jpg",
    review: "Trustworthy real estate business.",
    name: "John",
  },
  {
    id: 5,
    img: "/man5.jpg",
    review:
      "Exceptional service! Found my dream home effortlessly. ",
    name: "Brown",
  },
  {
    id: 6,
    img: "/man6.jpg",
    review: "Friendly agents who go above and beyond. ",
    name: "Aisha",
  },
  {
    id: 7,
    img: "/man7.jpg",
    review: "Their expertise is perfect !",
    name: "Mary",
  },
  {
    id: 8,
    img: "/man8.jpg",
    review: "Affordable and quality properties.",
    name: "Cynthia",
  },
  {
    id: 9,
    img: "/man9.jpg",
    review: "Quick and hassle-free home-buying process. ",
    name: "Favour",
  },
  {
    id: 10,
    img: "/man10.jpg",
    review: "Top-notch customer service. ",
    name: "Jennifer",
  },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;
  const intervalRef = useRef(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 10000);

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  // Manual navigation
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    resetTimer();
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    resetTimer();
  };

  // Reset auto-slide timer on manual navigation
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-80 flex items-center justify-center overflow-hidden ">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
          width: `${totalSlides * 100}%`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex flex-col md:flex-row items-center justify-center flex-shrink-0 bg-white P-3"
          >
            {/* Left Section - Customer Image */}
            <div className="w-1/3 flex justify-center">
              <img
                src={slide.img}
                alt={slide.name}
                className="w-24 h-24 object-cover rounded-full shadow-md"
              />
            </div>
            {/* Right Section - Review */}
            <div className="w-full  flex flex-col justify-center items-center px-2 ">
              <h3 className="text-base font-bold text-gray-900">{slide.name}</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">{slide.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 p-3  text-black rounded-full text-xl"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 p-3  text-black rounded-full text-xl"
      >
        <FaChevronRight />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              index === idx ? "bg-orange-900" : "bg-gray-400"
            }`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
