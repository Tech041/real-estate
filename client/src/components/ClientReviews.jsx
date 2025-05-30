import React from "react";
import ReviewCarousel from "./ReviewSlider";
import ReviewSlider from "./ReviewSlider";

const ClientReviews = () => {
  return (
    <section className="w-full h-full">
      <div className="container">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="capitalize text-3xl md:text-4xl font-semibold text-black">
              What our clients say about us.
            </h2>
          </div>
          <div className="text-xl font-semibold ">
            <h3 className="text-gray-500">More than 1000+ client reviews</h3>{" "}
          </div>
        </div>
        <div className="py-5">
          <ReviewSlider />
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
