import React from "react";
import Hero from "../../components/Hero";
import Coverage from "../../components/Coverage";
import Achievement from "../../components/Achievement";
import Map from "../../components/Map";
import Collections from "../../components/Collections";
import FrequentQuestions from "../../components/FrequentQuestions";
import ClientReviews from "../../components/ClientReviews";
import CalltoAction from "../../components/CalltoAction";
import Whatsapp from "../../components/Whatsapp";

const Home = () => {
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
