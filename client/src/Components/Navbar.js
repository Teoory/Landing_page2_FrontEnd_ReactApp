import React from 'react';
import logo from '../Assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  // window.onscroll = function () {scrollFunction()};
  // function scrollFunction() {
  //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //     document.querySelector(".Navbar").style.padding = "10px 10px";
  //     document.querySelector(".Navbar").style.backgroundColor = "white";
  //     document.querySelector(".Navbar").style.boxShadow = "0 4px 6px -6px black";
  //     document.querySelector(".Navbar").style.color = "black";
  //     document.querySelector(".Navbar").style.transition = "0.4s";
  //     document.querySelector(".Navbar").style.position = "fixed";
  //     document.querySelector(".Navbar").style.width = "100%";
  //     document.querySelector(".Navbar").style.zIndex = "1000";
  //   } else {
  //     document.querySelector(".Navbar").style.padding = "30px 10px";
  //     document.querySelector(".Navbar").style.backgroundColor = "transparent";
  //     document.querySelector(".Navbar").style.boxShadow = "none";
  //     document.querySelector(".Navbar").style.color = "white";
  //     document.querySelector(".Navbar").style.transition = "0.4s";
  //     document.querySelector(".Navbar").style.position = "relative";
  //   }
  // }
    
  return (
    <div className="Navbar">
      <div className="left">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="mid">
        <a href="/">All product</a>
        <a href="/">Campaigns</a>
        <a href="/">Phone & Accessory</a>
        <a href="/">Computer & Tablet</a>
        <a href="/">Headphones</a>
      </div>
      <div className="right">
        <div className="searchBox">
          <input type="text" placeholder="Search" />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar