import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ExploreButton from "./ExploreButton";

const Coverage = () => {
  return (
    <section className="h-full w-full bg-gradient-to-r from-orange-50 to-white py-5">
      <div className="container">
        <div className="">
          <h2 className="text-2xl md:text-3xl text-center font-semibold capitalize bg-gradient-to-r from-orange-100 to-white text-black px-4 py-1 ">
            We offer you luxurious homes at affordable prices.
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-5">
            {/* left */}
            <div className="flex-1 ">
              <div className="w-full h-full bg-red-600 rounded-xl overflow-hidden">
                <img
                  src="/img001.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* right */}
            <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-3">
              <div className="flex-1 shadow-xl py-5  rounded-lg ">
                <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-600 ">
                  LuxLife is multi-agent platform.
                </h3>
                <p className="text-center px-2">
                  Are you a property agent?. This is best platform for you to
                  showcase what you have for sale. All posts must be approved by
                  admin to ensure compliance before approval.
                </p>
                <div className="flex justify-center items-center pt-6">
                  <button className="px-3 py-2 bg-gradient-to-bl from-orange-700 to-orange-400 rounded-lg text-white">
                    Get started
                  </button>
                </div>
              </div>
              <div className="flex-1 rounded-lg overflow-hidden shadow-lg py-4">
                <div className="">
                  <img src="/img002.png" alt="" className="mb-2" />
                </div>
                <div className="mt-3 flex items-center justify-center  ">
                  <ExploreButton text={"Explore Properties"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
