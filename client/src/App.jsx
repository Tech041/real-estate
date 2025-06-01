import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Properties from "./pages/properties/Properties";
import Footer from "./components/Footer";
import Admin from "./pages/admin/Admin";
import PropertyDetails from "./pages/productDetails/PropertyDetails";
import Post from "./pages/post/Post";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { allListing } = useContext(AppContext);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/properties"
          element={<Properties listing={allListing} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/post" element={<Post />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
