import React from "react";

const CarouselItem = ({ img, review, name }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-full text-center p-6">
      <div className="w-2/5 flex justify-center">
        <img src={img} alt={name} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
      </div>
      <div className="w-full text-gray-900">
        <h2 className="text-3xl font-bold">{review}</h2>
        <p className="text-lg text-gray-600 mt-2">{name}</p>
      </div>
    </div>
  );
};

export default CarouselItem;