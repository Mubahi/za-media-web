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
        <h1 className="text-4xl sm:text-6xl md:text-8xl " data-aos="zoom-in">
          Welcome To Za:Media
        </h1>
      </div>
    </>
  );
};
export default Homescreen;
