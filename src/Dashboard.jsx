import React from "react";

const Dashboard = () => {
 
    return (
      <div className="flex justify-center items-center h-screen py-40 bg-gradient-to-b from-yellow-500 to-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-gradient-to-b from-yellow-300 to-orange-300 rounded-ee-full">
            <div className="">
                  <img src="zamedia.png" className="w-68" alt="za-media-logo" />
            </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <p className='text-3xl mb-6 font-bold font-serif'>Welcome</p>
              <form action="#">
                <div className="relative mt-4">
                    <input id="userName" type="text" placeholder="" required className="text-black peer placeholder-transparent bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"/>
                    <label className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all" htmlFor="userName" name="userName">
                    Username...
                    </label>
                </div>
                <div className="relative mt-4">
                    <input id="password" type="password" required placeholder="" className="text-black peer placeholder-transparent bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild "/>
                    <label className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all " htmlFor="password" name="password">
                    Password...
                    </label>
                </div>
                <div className="mt-5">
                    <button className="border-2 border-yellow-500 bg-yellow-500 text-white py-1 w-full rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold animate-bounce roboto-mono">
                            Login
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