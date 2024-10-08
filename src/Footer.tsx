import React from "react";
import Logo from "./assets/Wevaha_Logo.png";
import Facebook from "./assets/Icons/Facebook.svg";
import Instagram from "./assets/Icons/Instagram.svg";
import Youtube from "./assets/Icons/Youtube.svg";
import Pinterest from "./assets/Icons/Pinterest.svg";
import Threads from "./assets/Icons/Threads-White.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full\ sm:h-[60vh] lg:mt-0 mt-[5vh] sm:mt-[5vh] lg:h-[70vh] pb-10 flex flex-col justify-center items-center bg-gradient-to-b from-white to-[#fff7e4] scroll-smooth transition-all duration-1000 ease-in-out">
      <img
        loading="lazy"
        className="sm:w-[25vw] w-[40vw] lg:w-[15vw] pt-32"
        src={Logo}
        alt="Wevaha Logo"
      />

      <p className="lg:w-[40vw] w-[85vw] sm:w-[60vw] sm:mt-[-20px] mt-[-6px] lg:mt-[-20px] pb-2 sm:pb-2 lg:pb-4 text-center text-yellow-900 text-[8px] sm:text-[10.5px] lg:text-[13px]">
        Welcome we specialize in Capturing your cherished moments for Weddings,
        Receptions, All Kind of Events & Commercial shoots and etc..
      </p>

      <div className="w-[20vw] h-[0.5px] rounded-full bg-yellow-700"></div>

      <div className="flex justify-between pb-12 pt-4 items-center sm:w-[20vw] sm:max-w-[150px] w-[40vw] max-w-[150px] lg:w-[13vw] lg:max-w-[180px]">
        <Link
          to={
            "https://www.facebook.com/share/6sHCKECLXjQSZFCV/?mibextid=qi2Omg"
          }
          className="cursor-pointer"
        >
          <img
            loading="lazy"
            className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-6 h-6 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Facebook}
            alt="Facebook"
          />
        </Link>
        <Link
          to={
            "https://www.instagram.com/wevahaphotography?igsh=MTdzZDFuaWNzZXh4Mg=="
          }
          className="cursor-pointer"
        >
          <img
            loading="lazy"
            className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-6 h-6 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Instagram}
            alt="Instagram"
          />
        </Link>
        <Link
          to={"https://youtube.com/@wevahaphotography?si=mYl3u-3hy2io3_CC"}
          className="cursor-pointer"
        >
          <img
            loading="lazy"
            className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-6 h-6 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Youtube}
            alt="YouTube"
          />
        </Link>
        <Link to={"https://pin.it/3PPV3nOlS"} className="cursor-pointer">
          <img
            loading="lazy"
            className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-6 h-6 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Pinterest}
            alt="Pinterest"
          />
        </Link>
        <Link
          to={
            "https://www.threads.net/@wevahaphotography?xmt=AQGzJq6tWvLB6Cnk7ZLBctQOYBFBv4fP_BdfeK_7iKQwLmg"
          }
          className="cursor-pointer"
        >
          <img
            loading="lazy"
            className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-6 h-6 p-1 rounded-full bg-yellow-800 hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Threads}
            alt="Pinterest"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
