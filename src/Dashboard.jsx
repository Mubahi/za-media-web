import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Dashboard = ({onLogin}) => {
  useEffect(() => {
    Aos.init({duration:1000});
  })
    return (
      <div className="flex justify-center items-center h-screen py-40 bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-gradient-to-b from-yellow-300 to-orange-300 rounded-ee-full">
              <div className="" data-aos="zoom-out">
                    <img src="zamedia.png" className="w-68" alt="za-media-logo" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <p className='text-2xl mb-6 font-bold font-serif'>Enter Your Credentials</p>
              <form action="#">
                <div className="relative mt-4">
                    <input id="userName" type="text" placeholder="" required className="text-black peer placeholder-transparent bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"/>
                    <label className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all" htmlFor="userName" name="userName">
                    Username...
                    </label>
                </div>
                <div className="relative mt-4">
                    <input id="password" type="password" placeholder="" required className="text-black peer placeholder-transparent bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild "/>
                    <label className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all " htmlFor="password" name="password">
                    Password...
                    </label>
                </div>
                <div className="mt-5">
                    <button className="border-2 border-yellow-500 bg-yellow-500 text-white py-1 w-full rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold animate-bounce roboto-mono flex justify-center items-center" onClick={onLogin}>
                            <p>Login</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right ml-1" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                              <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                          </svg>
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Dashboard;