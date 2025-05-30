import React from "react";
import { LuBedDouble } from "react-icons/lu";
import { FaBath } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
const CollectionCard = ({ img, bedroom, bathroom, price, loc, title }) => {
  return (
    <div className="w-full h-full rounded-2xl border-2 overflow-hidden relative mb-5">
      <span className="absolute top-1 left-1 px-3 py-1 bg-gradient-to-tr from-orange-200 to-white rounded-3xl text-xs italic">
        For Sale
      </span>
      <div className="h-[60%]">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <div className="h-[40%] px-1">
        <div className="flex items-center justify-between gap-4 pt-3 text-sm px-1">
          <div className="flex items-center gap-2">
            <span className="">
              <LuBedDouble size={15} />
            </span>
            <span className="flex items-center gap-1">
              <span className=""> {bedroom}</span>{" "}
              <span className="hidden sm:block">bedroom</span>
            </span>
          </div>
          .
          <div className="flex items-center gap-2">
            <span className="">
              <FaBath size={15} />
            </span>
            <span className="flex items-center gap-1">
              <span className="">{bathroom}</span>{" "}
              <span className="hidden sm:block">bathroom</span>
            </span>
          </div>
          <div className="flex  items-center bg-green-100 px-2 rounded-lg ">
            <span className="pr-1">
              <FaEye size={20} color="black" />
            </span>
            <span className="text-xs italic">View</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-orange-950 py-2">{title}</h3>
        <div className="flex items-center gap-4 py-2">
          <span className="">${price}</span>.
          <span className="flex items-center justify-center gap-1">
            <span className="text-base italic">
              <IoLocationOutline size={15} color="green" />
            </span>
            <span className="">{loc}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
