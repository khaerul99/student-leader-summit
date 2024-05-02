import React from 'react'

function Navbar({showModal ,setShowModal}) {
  return (
    <>
    <div className="navbar bg-[#191919] fixed px-5 z-[999] lg:w-[1280px] max-w-7xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <img src="assets/logo/LOGO1.png" alt="" className='h-8 w-8' />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="text-white menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Speaker</a></li>
      <li><a>Syarat & Ketentuan</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button  onClick={() => setShowModal(!showModal)} className="btn  text-white bg-gradient-to-r from-[#EE2F37] to-[#FF8025]">Button</button>
  </div>
</div>
    </>
  )
}

export default Navbar