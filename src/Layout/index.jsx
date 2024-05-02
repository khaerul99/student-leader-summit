import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({children}) {
  return (
    <div className="flex justify-center">
        <Navbar/>
      <div className="w-[1280px] max-w-7xl">
        <div>{children}</div>
      <Footer/>
      </div>
    </div>
  );
}

export default Layout;
