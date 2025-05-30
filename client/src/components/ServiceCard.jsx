import React from "react";

const ServiceCard = ({ text1, text2, className }) => {
  return (
    <div className={className}>
      
      <p className="font-bold text-3xl text-gray-600  py-4">{text1}</p>
      <p className="text-2xl text-black/50">{text2}</p>
      
    </div>
  );
};

export default ServiceCard;
