import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Cars from "../pages/Cars";
import LoginSignup from "../pages/LoginSignup";
import Payment from "../components/UI/Payment";
import Adpanel from '../pages/Adpanel';






const Routers = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="*" element={<NotFound />} />
      <Route path = "/Contact" element={<Contact/>}/>
      <Route path = "/Contact" element={<Contact/>}/>
      <Route path="/LoginSignup" element={<LoginSignup />} />
      <Route path = "/Cars" element={<Cars/>}/>
      <Route path = "/Payment" element={<Payment/>}/>
      <Route path="/Adpanel" element={<Adpanel/>}/>
      
      

     
     

      
    </Routes>
  );
};

export default Routers;
