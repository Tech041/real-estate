import React from "react";

import ServiceCard from "./ServiceCard";

const Achievement = () => {
  return (
    <section className="bg-white pt-5">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ServiceCard
              text1={"100%"}
              text2={"Satisfied clients.  "}
              className={
                "border-t-2 border-r-2 border-b-2  border-orange-700 px-16 py-4 w-full"
              }
            />
            <ServiceCard
              text1={"500+"}
              text2={"Properties sold.  "}
              className={
                "border-t-2 border-l-2 border-b border-orange-700  px-16 py-4 w-full"
              }
            />{" "}
            <ServiceCard
              text1={"In 200+ "}
              text2={"Countries and cities "}
              className={
                "border-t-2 border-r-2 border-b-2 border-orange-700  px-16 py-4 w-full"
              }
            />{" "}
            <ServiceCard
              text1={"2000+"}
              text2={" Positive reviews "}
              className={
                "border-t-2 border-l-2 border-b-2 border-orange-700 px-16 py-4 w-full"
              }
            />{" "}
            <ServiceCard
              text1={"1000+"}
              text2={"Referrals"}
              className={
                "border-t-2 border-r-2 border-b-2 border-orange-700  px-16 py-4 w-full"
              }
            />
            <ServiceCard
              text1={"500+"}
              text2={"Registered agents."}
              className={
                "border-t-2 border-l-2 border-b-2 border-orange-700 px-16 py-4 w-full"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
