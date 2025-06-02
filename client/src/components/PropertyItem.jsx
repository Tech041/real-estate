import React, { useState } from "react";
import EditListing from "./EditListing";
import apiRequest from "../utils/apiRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PropertyItem = ({
  img1,
  img2,
  img3,
  bedroom,
  bathroom,
  loc,
  title,
  price,
  description,
  id,
  contact,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const exitEditing = () => {
    setIsEditing(false);
    window.location.reload();
  };

  // Delete listing
  const handleDeleteList = async (id) => {
    const res = await apiRequest.delete(`/api/delete-listing/${id}`);
    if (res.data.success) {
      toast.success(res.data.message);
      navigate("/");
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <div className="w-full h-full pb-10 relative">
      {isEditing && (
        <EditListing exit={exitEditing} desc={description} id={id} />
      )}
      <h1 className="text-3xl font-bold black text-center text-white py-2 bg-gradient-to-tl from-black/80 to-white">
        Property Details
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2  mt-6  ">
        <div className="flex-1 h-full w-full  flex flex-col justify-center items-center gap-1 ">
          <div className="h-full w-full">
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>{" "}
          <span className="font-bold text-lg">Exterior view</span>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={img2} alt="" className="w-full h-full object-cover" />
              <span className="font-bold text-lg">Interior view</span>
            </div>{" "}
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={img3} alt="" className="w-full h-full object-cover" />
              <span className="font-bold text-lg">Interior view</span>
            </div>{" "}
          </div>
          <div className="px-4">
            <h2 className="text-xl font-semibold text-center bg-gradient-to-tr from-blue-200 to-white my-4 px-3">
              Description
            </h2>

            <p className=" text-lg font-semibold text-blue-600 text-center gap-3">
              <span className="pr-3">{title}</span>
            </p>
            <p className="">{description}</p>

            <p className="font-semibold">
              Number of bedrooms :{" "}
              <span className="px-2 text-orange-900 font-bold">{bedroom}</span>{" "}
            </p>
            <p className="font-semibold">
              Number of bathrooms :{" "}
              <span className="px-2 text-orange-900 font-bold">{bathroom}</span>{" "}
            </p>

            <p className="font-semibold">
              Location:{" "}
              <span className="pl-4 font-bold text-gray-800">{loc}</span>{" "}
            </p>
            <p className="font-semibold">
              Contact Agent:
              <span className="pl-4 text-blue-600 font-bold">
                {contact} 123-456-789
              </span>{" "}
            </p>
            <p className="font-semibold">
              <span className="text-green-900 font-bold">
                {" "}
                Priced at ₦{price}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* actions */}
      <div className="flex justify-center items-center gap-3 my-4">
        <button
          onClick={() => {
            setIsEditing(true), scrollTo(0, 0);
          }}
          className="px-3 py-1 bg-gradient-to-tr from-blue-600 to-blue-300 rounded-lg"
        >
          Edit Listing
        </button>
        <button
          onClick={() => handleDeleteList(id)}
          className="px-3 py-1 bg-gradient-to-tr from-red-600 to-red-300 rounded-lg"
        >
          Delete Listing
        </button>
      </div>
    </div>
  );
};

export default PropertyItem;
