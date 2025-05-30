import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ExploreButton = ({ text }) => {
  return (
    <button className="px-3 py-2 bg-black rounded-full text-white text-xs  flex justify-center items-center gap-2">
      <span className="">{text}</span> <FaArrowRight />
    </button>
  );
};

export default ExploreButton;
