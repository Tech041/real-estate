import React, { useEffect, useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import CollectionCard from "../../components/CollectionCard";
import Spinner from "../../components/Spinner";
import SearchForm from "../../components/SearchForm";

const Properties = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listing, setListing] = useState([]);
  const [showSearch, setShowSearch] = useState(true);

  const fetchAllProperties = async () => {
    setIsLoading(true);
    try {
      const res = await apiRequest.get("/api/listing");
      if (res.data.success) {
        setListing(res.data.listing);
        setIsLoading(false);
      } else {
        console.log("Error fetching all listing", res.data.message);
      }
    } catch (error) {
      console.log("Error fetching all list", error);
    }
  };
  useEffect(() => {
    fetchAllProperties();
  }, []);
  return (
    <section className="pt-20 h-full w-full bg-gradient-to-bl from-orange-50 to-yellow-50">
      <div className="container">
        <h1 className=" text-center py-2 font-extrabold text-2xl">
          All Listed Properties
        </h1>
        <div className="w-full h-full flex items-center justify-center gap-3">
          {showSearch && <SearchForm />}
          <span
            onClick={() => setShowSearch(!showSearch)}
            className="cursor-pointer text-green-700 italic"
          >
            {showSearch ? <IoMdClose size={20} color="red" /> : <GiHamburgerMenu size={20}  color=" blue"/>}
          </span>
        </div>{" "}
        <div className="h-full w-full">
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
      </div>
    </section>
  );
};

export default Properties;
