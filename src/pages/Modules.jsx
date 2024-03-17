import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const Modules = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-800">
          Module Form
        </h2>

        <form>
          <div className="relative mt-4">
            <input
              id="moduleTitle"
              type="text"
              placeholder=""
              required
              className="text-black peer placeholder-transparent bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"
            />
            <label
              className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all"
              htmlFor="moduleTitle"
              name="moduleTitle"
            >
              Module Title
            </label>
          </div>

          <div className="relative mt-4">
            <input
              id="moduleName"
              type="text"
              placeholder=""
              required
              className="text-black peer placeholder-transparent bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"
            />
            <label
              className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all"
              htmlFor="moduleName"
              name="moduleName"
            >
              Module Name
            </label>
          </div>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modules;
