import React, { useContext, useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Coverage from "../../components/Coverage";
import Achievement from "../../components/Achievement";
import Map from "../../components/Map";
import Collections from "../../components/Collections";
import FrequentQuestions from "../../components/FrequentQuestions";
import ClientReviews from "../../components/ClientReviews";
import CalltoAction from "../../components/CalltoAction";
import Whatsapp from "../../components/Whatsapp";
import apiRequest from "../../utils/apiRequest";
import { AppContext } from "../../context/AppContext";

const Home = () => {
  const {  setAllListing, listing, setListing } =
    useContext(AppContext);
  const [loading, setLoading] = useState(false);

  // const isAuthenticated = async () => {
  //   const res = await apiRequest.get("/api/auth/authenticated");

  //   if (res.data.success) {
  //     setIsAuth(true);
  //   } else {
  //     setIsAuth(false);
  //   }
  // };
  // useEffect(() => {
  //   isAuthenticated();
  // }, []);

  // Fetch listing
  const fetchAllListing = async () => {
    setLoading(true);
    try {
      const res = await apiRequest.get("/api/listing");
      if (res.data.success) {
        setAllListing(res.data.listing);
        setListing(res.data.listing.slice(0, 6));
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

  return (
    <main className="relative  ">
      <Hero />
      <Whatsapp />
      <Coverage />
      <Achievement />
      <Map />
      <Collections listing={listing} isLoading={loading} />
      <FrequentQuestions />
      <ClientReviews />
      <CalltoAction />
    </main>
  );
};

export default Home;
