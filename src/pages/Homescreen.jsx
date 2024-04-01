import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Homescreen = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="min-h-screen font-bold font-base flex items-center justify-center bg-white text-center">
        <p
          className="text-4xl sm:text-6xl md:text-8xl text-[#000000]"
          data-aos="zoom-in"
        >
          Welcome To Za:Media
        </p>
      </div>
    </>
  );
};
export default Homescreen;
