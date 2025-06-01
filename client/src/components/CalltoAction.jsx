import React, { useContext } from "react";
import ExploreButton from "./ExploreButton";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const CalltoAction = () => {
  const { isAuth } = useContext(AppContext);

  return (
    <section className=" flex justify-center items-center w-full  text-black h-[400px]">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold text-center capitalize ">
          Ready to make your dream property a reality?
        </h1>
        <p className="text-base font-semibold text-center text-gray-900 py-6">
          Explore a curated selection of properties that align with your vision
          and goals.
        </p>
        <div className="flex justify-center">
          <Link onClick={() => scrollTo(0, 0)} to={isAuth ? "/post" : "/login"}>
            <ExploreButton text={"Get started"} />
          </Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;
