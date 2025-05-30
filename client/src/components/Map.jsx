import React from "react";
import ExploreButton from "./ExploreButton";

const Map = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between  gap-4">
          <div className="flex-1 rounded-lg overflow-hidden p-1 bg-gradient-to-tr from-orange-700 to-blue-700">
            <img src="/map.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 pt-10">
            <h2 className="text-center md:text-start text-2xl md:text-3xl font-semibold py-2 text-black">
              Discover properties with the best value.
            </h2>
            <p className="text-center md:text-start text-gray-500">
              From minimalist interiors to compact solutions,small spaces
              inspire big ideas, proving that you don&apos;t need much room.
            </p>
            <div className=" pt-4 flex justify-center  md:justify-start ">
              <ExploreButton text={"Find nearest properties"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
