import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Whatsapp = () => {
  return (
    <div className="p-2 rounded-full bg-green-600 fixed bottom-4 right-4 z-40">
      <a href="https://wa.link/cfop30" target="_blank" className="">
        <span className=" ">
          <FaWhatsapp size={20} color="white" />
        </span>
      </a>
    </div>
  );
};

export default Whatsapp;
