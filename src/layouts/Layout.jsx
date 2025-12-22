import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Layout = () => {
  return (
    <div className="min-h-screen flex-col bg-gradien-to-r from-blue-500 to-purple-600">
     
        <Navbar />
     
        <Outlet />
    
     
        <Footer />
      
    </div>
  );
};

export default Layout;
