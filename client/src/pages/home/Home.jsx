import React, { useContext, useEffect } from "react";
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
  const { setIsAuth } = useContext(AppContext);
  const isAuthenticated = async () => {
    console.log("Checking authentication...");

    const res = await apiRequest.get("/api/auth/authenticated");
    console.log("Response is ", res.data);
    if (res.data.success) {
      console.log("auth res ", res.data.message);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };
  useEffect(() => {
    isAuthenticated();
    console.log("Running authentication check...");
  }, []);
  return (
    <main className="relative  ">
      <Hero />
      <Whatsapp />
      <Coverage />
      <Achievement />
      <Map />
      <Collections />
      <FrequentQuestions />
      <ClientReviews />
      <CalltoAction />
    </main>
  );
};

export default Home;
