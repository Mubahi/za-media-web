import React from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
import { useEffect,useState } from "react";

const Nav = ({setActive, View, onLogout}) => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
    
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const navbarClass = `bg-${scrolled ? 'slate' : 'blue'}-400 py-2 px-4 fixed w-full z-10`;
    return (
        <nav className={navbarClass} data-aos="fade-down">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <img src="/zamedia.png" alt="za-media-Logo" className="w-48"/>
                </div>
                <div className="flex items-center">
                    <button onClick={() => setActive('Home')} className={View === 'Home' ? 'bg-orange-500 flex items-center text-white py-1 px-2 w-full md:w-auto rounded-md transition duration-300 font-semibold outline-none ml-4 bona-nova-regular-italic' : 'text-white cursor-pointer mx-2 flex items-center transition-all duration-300 bona-nova-regular-italic'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                    </svg>
                        <p className="ml-1">Home</p>
                    </button>
                    <button onClick={() => setActive('AllShops')} className={View === 'AllShops' ? 'bg-orange-500 flex items-center text-white py-1 px-2 w-full md:w-auto rounded-md transition duration-300 font-semibold outline-none ml-4 bona-nova-regular-italic' : 'text-white cursor-pointer mx-2 flex items-center transition-all duration-300 bona-nova-regular-italic'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
                    </svg>
                        <p className="ml-1">All Shops</p>
                    </button>
                    
                </div>
                <div className="mb-4 md:mb-0 flex items-center justify-center">
                    <button  className='bg-red-500 rounded-md'>
                        <select onChange={(e) => setActive(e.target.value)} value='' className="text-white mx-1 w-full sm:w-28 mb-1 sm:mb-0 py-1 bg-transparent outline-none">
                            <option value="" className="bg-red-500 text-white">Settings</option>
                            <option value="RolesandUsers" className="bg-red-500 text-white">Rolls&Users</option>
                            <option value="Modules" className="bg-red-500 text-white">Modules</option>
                        </select>
                    </button>
                    <button  onClick={onLogout} className="border-2 border-red-500 bg-red-500 text-white py-1 px-2 w-full md:w-auto rounded-md hover:bg-white hover:text-red-500 hover:border-red-500 outline-none ml-2 flex items-center bona-nova-regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                            <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                        </svg>
                        <p className="ml-1">Log out</p>
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default Nav;