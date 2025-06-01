import React from "react";
import ExploreButton from "./ExploreButton";
import CollectionCard from "./CollectionCard";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Collections = ({ listing, isLoading }) => {
  return (
    <section className=" w-full h-full pb-10 bg-gradient-to-bl from-orange-50 to-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-semibold text-black text-center md:text-start py-2 ">
              Explore Our our premier houses
            </h2>
            <p className="text-gray-500 text-base text-center md:text-start">
              Each listimg offers unique features, exceptional qualities,prime
              locations, ensuring living experiences.
            </p>
          </div>
          <div className="">
            <Link to={"/properties"}>
              <ExploreButton text={" See All "} />
            </Link>{" "}
          </div>
        </div>
        {/* colletions */}
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
            {listing?.map((item) => (
              <CollectionCard
                key={item._id}
                id={item._id}
                img={item.image[0]}
                title={item.title}
                loc={item.loc}
                price={item.price}
                bedroom={item.bedroom}
                bathroom={item.bathroom}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Collections;
