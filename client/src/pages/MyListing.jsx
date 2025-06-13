import React from "react";
import { useState } from "react";
import apiRequest from "../utils/apiRequest";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CollectionCard from "../components/CollectionCard";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const MyListing = () => {
  const [listed, setListed] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId, isAuth } = useContext(AppContext);
  const navigate = useNavigate();

  // Fetch listing
  const fetchAllListing = async () => {
    setLoading(true);
    try {
      const res = await apiRequest.get("/api/listing");
      if (res.data.success) {
        setListed(res.data.listing);
        setLoading(false);
      } else {
        console.log("Error fetching all listing", res.data.message);
      }
    } catch (error) {
      console.log("Error fetching all list", error);
    }
  };

  useEffect(() => {
    fetchAllListing();
  }, []);

  const showListings = async () => {
    let listedBy = listed.slice();
    const myListing = listedBy.filter((person) => person.listedBy === userId);

    setFiltered(myListing);
  };
  useEffect(() => {
    showListings();
  }, [listed]);

  useEffect(() => {
    !isAuth && navigate("/");
  }, [isAuth]);

  return (
    <section className="pt-20 min-h-screen w-full">
      <div className="container">
        {filtered.length === 0 ? (
          <div>No listings found</div>
        ) : (
          <div className="">
            {loading ? (
              <Spinner />
            ) : (
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
                {filtered?.map((item) => (
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
        )}
      </div>
    </section>
  );
};

export default MyListing;
