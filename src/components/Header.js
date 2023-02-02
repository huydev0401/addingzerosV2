import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const handleToggleHamburger = () => setShowNav(!showNav);
  return (
    <header
      className={`top-0 left-0 right-0 p-[10px] bg-white z-[9999] md:relative ${
        !!showNav ? "fixed" : ""
      }`}
    >
      <div className="relative flex items-center justify-between page-container-fluid">
        <a href="/">
          <img srcSet="/images/logo.png 2x" alt="" />
        </a>
        <div className={`nav-menu ${!!showNav ? "active" : ""}`}>
          <a
            className="font-bold text-[13px] capitalize hover:text-[#23f0ff] transition-all duration-300 cursor-pointer mr-[45px]"
            href="#benefit"
            onClick={() => setShowNav(false)}
          >
            LỢI ÍCH KHI THAM GIA
          </a>
          <a
            className="font-bold text-[13px] capitalize hover:text-[#23f0ff] transition-all duration-300 cursor-pointer mr-[45px]"
            href="#coach"
            onClick={() => setShowNav(false)}
          >
            DIỄN GIẢ
          </a>
          <a
            className="font-bold text-[13px] capitalize hover:text-[#23f0ff] transition-all duration-300 cursor-pointer"
            href="#info"
            onClick={() => setShowNav(false)}
          >
            THÔNG TIN SEMINAR
          </a>
          <div>
            <a
              href="tel:0329893799"
              className="font-bold text-white uppercase h-[40px] bg-[#F7425A] rounded-md px-[16px] items-center justify-center cursor-pointer !text-[18px]  !inline-flex md:!hidden"
              target="_blank"
              rel="noreferrer"
            >
              Hotline: 0329 893 799
            </a>
          </div>
        </div>
        <div className="hamburger" onClick={handleToggleHamburger}>
          {!!showNav ? (
            <FaTimes size={30} style={{ color: "#000" }}></FaTimes>
          ) : (
            <FaBars size={30} style={{ color: "#000" }}></FaBars>
          )}
        </div>
        {/* <a
          href="#register"
          className="hidden font-bold uppercase h-[42px] bg-[#0B1347] px-[16px] py-[8px] md:flex items-center justify-center cursor-pointer btn-scale text-[13px] text-white rounded-[65px] w-[169px] btn-scale"
        >
          ĐĂNG KÝ THAM GIA
        </a> */}
        <a
          href="tel:0329893799"
          className="hidden font-bold text-white uppercase h-[40px] bg-[#F7425A] rounded-md px-[16px] md:flex items-center justify-center cursor-pointer btn-scale text-[14px]"
          target="_blank"
          rel="noreferrer"
        >
          Hotline: 0329 893 799
        </a>
      </div>
    </header>
  );
}
