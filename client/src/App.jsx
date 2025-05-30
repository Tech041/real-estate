import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Properties from "./pages/properties/Properties";
import Auth from "./pages/auth/Auth";
import Footer from "./components/Footer";

const App = () => {
  const isAuthPage = useMatch("/auth");
  return (
    <div className="">
      {!isAuthPage && <Navbar />}{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {!isAuthPage && <Footer />}{" "}
    </div>
  );
};

export default App;
