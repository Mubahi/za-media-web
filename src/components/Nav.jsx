import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState, useRef } from "react";

const Nav = ({ setActive, View, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <nav className="py-2 px-4 fixed w-full z-10 bg-white" data-aos="fade-down">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <img
            onClick={() => setActive("Home")}
            src="/zamedia.png"
            alt="za-media-Logo"
            className="w-48"
          />
        </div>
        <div className="flex items-center text-black hover:text-gray-400 px-2">
          <button
            onClick={() => setActive("AllShops")}
            className={` ${
              View === "AllShops"
                ? "bg-white text-black flex items-center py-1 px-2 w-full md:w-auto rounded-md transition duration-300 font-bold outline-none ml-4 font-base"
                : "hover:text-black cursor-pointer mx-2 flex items-center transition-all duration-300 font-base"
            } text-base font-bold rounded-lg py-1 px-2 text-center inline-flex items-center  transition-colors duration-500 `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-shop"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
            </svg>
            <p className="ml-1">Shops</p>
          </button>
          <button
            onClick={() => setActive("Events")}
            className={` ${
              View === "Events"
                ? "bg-white text-black flex items-center py-1 px-2 w-full md:w-auto rounded-md transition duration-300 font-bold outline-none ml-4 font-base"
                : "hover:text-black cursor-pointer mx-2 flex items-center transition-all duration-300 font-base"
            } text-base font-bold rounded-lg py-1 px-2 text-center inline-flex items-center  transition-colors duration-500 `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar4-event"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
              <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
            <p className="ml-1">Events</p>
          </button>
        </div>
        <div
          className=" relative mb-4 md:mb-0 flex items-center justify-center"
          ref={menuRef}
        >
          <button
            ref={buttonRef}
            id="dropdownHoverButton"
            className={`text-black ${
              isMenuOpen ? " custom-rotate	" : "custom-rotate-reverse"
            } text-base font-bold rounded-lg py-1 px-2 text-center inline-flex items-center  transition-colors duration-500 `}
            blacke="button"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-gear text-black"
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
            </svg>
          </button>
          {isOpen && (
            <div
              id="dropdownHover"
              className="z-10 divide-y rounded-lg shadow w-44 bg-[#D8D9DA] absolute top-full border border-gray-300 mr-60"
            >
              <ul className="font-semibold text-black">
                <li>
                  <button
                    onClick={() => {
                      setActive("Users");
                      closeMenu();
                    }}
                    className=" pb-1 px-4 flex items-center hover:bg-gray-400 hover:rounded-md hover:text-white w-full text-left"
                  >
                    Users
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActive("Roles");
                      closeMenu();
                    }}
                    className="pb-1 flex items-center px-4 hover:bg-gray-400 hover:rounded-md hover:text-white w-full text-left"
                  >
                    Roles
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActive("ModulesAdd");
                      closeMenu();
                    }}
                    className="pb-1 flex items-center px-4 hover:bg-gray-400 hover:rounded-md hover:text-white w-full text-left"
                  >
                    Modules
                  </button>
                </li>
              </ul>
            </div>
          )}
          <button
            onClick={onLogout}
            className="  bg-orange-500 text-white py-1 px-2 w-full md:w-auto rounded-md outline-none ml-2 flex items-center font-base font-bold transition duration-500 ease-in-out hov hover:text-white hover:bg-orange-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
              />
              <path
                fillRule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
              />
            </svg>
            <p className="ml-1">Log out</p>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
