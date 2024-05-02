import React, { useState } from "react";
import { Link } from "react-router-dom";

function Modal({ showModal, setShowModal }) {
  const closeModal = () => setShowModal(false);

  return (
    <div
      className={`fixed flex justify-center items-center h-screen w-full lg:w-[1280px] z-[99] ${
        showModal ? "top-0" : "-top-[700px]"
      } transition-all duration-300`}
    >
      <div className="lg:w-[300px] bg-white p-10 rounded-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl font-bold text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="grid grid-cols-2 gap-5">
          <Link>
            <button className="btn px-10 border-none text-white bg-gradient-to-r from-[#EE2F37] to-[#FF8025]">
              {" "}
              Link 1
            </button>
          </Link>
          <Link>
            <button className="btn px-10 border-none text-white bg-gradient-to-r from-[#EE2F37] to-[#FF8025]">
              {" "}
              Link 1
            </button>
          </Link>
          <Link>
            <button className="btn px-10 border-none text-white bg-gradient-to-r from-[#EE2F37] to-[#FF8025]">
              {" "}
              Link 1
            </button>
          </Link>
          <Link>
            <button className="btn px-10 border-none text-white bg-gradient-to-r from-[#EE2F37] to-[#FF8025]">
              {" "}
              Link 1
            </button>
          </Link>
          <Link>
            <button className="btn px-10 border-none text-white bg-gradient-to-r from-[#EE2F37] to-[#FF8025]">
              {" "}
              Link 1
            </button>
          </Link>
          <Link>
            <button className="btn px-10 border-none text-white bg-gradient-to-r from-[#EE2F37] to-[#FF8025]">
              {" "}
              Link 1
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
