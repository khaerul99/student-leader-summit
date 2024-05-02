import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

function Layout({ children, showModal, setShowModal }) {
//   const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center">
      <Navbar showModal={showModal} setShowModal={setShowModal} />
      <div className="w-[1280px] max-w-7xl">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
