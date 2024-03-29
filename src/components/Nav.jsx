import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState, useRef } from "react";

const Nav = ({ setActive, View, onLogout }) => {
  const [Scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the menu when clicking outside of it
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

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarClass = `bg-${
    Scrolled ? "slate" : "blue"
  }-400 py-2 px-4 fixed w-full z-10`;
  return (
    <nav className={navbarClass} data-aos="fade-down">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <img
            onClick={() => setActive("Home")}
            src="/zamedia.png"
            alt="za-media-Logo"
            className="w-48"
          />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setActive("AllShops")}
            className={
              View === "AllShops"
                ? "bg-orange-500 flex items-center text-white py-1 px-2 w-full md:w-auto rounded-md transition duration-300 font-semibold outline-none ml-4 bona-nova-regular-italic"
                : "text-white cursor-pointer mx-2 flex items-center transition-all duration-300 bona-nova-regular-italic"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check2-all"
              viewBox="0 0 16 16"
            >
              <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
              <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
            </svg>
            <p className="ml-1">Shops</p>
          </button>
          <button
            onClick={() => setActive("Events")}
            className={
              View === "Events"
                ? "bg-orange-500 flex items-center text-white py-1 px-2 w-full md:w-auto rounded-md transition duration-300 font-semibold outline-none ml-4 bona-nova-regular-italic"
                : "text-white cursor-pointer mx-2 flex items-center transition-all duration-300 bona-nova-regular-italic"
            }
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
            id="dropdownHoverButton"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={toggleMenu}
          >
            Dropdown hover{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          {isOpen && (
            <div
              id="dropdownHover"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full mt-1"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href=""
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeMenu} // Close menu on item selection
                  >
                    Users
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeMenu} // Close menu on item selection
                  >
                    Roles
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeMenu} // Close menu on item selection
                  >
                    ModelsAdd
                  </a>
                </li>
              </ul>
            </div>
          )}
          {/* <button className="bg-orange-500 w-full md:w-auto rounded-md pr-1 h-[36px]">
            <select
              onChange={(e) => setActive(e.target.value)}
              value=""
              className="text-white cursor-pointer mx-1 w-full sm:w-28 mb-1 sm:mb-0 py-1 bg-transparent outline-none"
            >
              <option value="" className="bg-orange-500 text-white">
                Settings
              </option>
              <option value="Users" className="bg-orange-500 text-white">
                Users
              </option>
              <option value="Roles" className="bg-orange-500 text-white">
                Roles
              </option>
              <option value="ModulesAdd" className="bg-orange-500 text-white">
                Modules
              </option>
            </select>
          </button> */}
          <button
            onClick={onLogout}
            className="border-2 border-red-500 bg-red-500 text-white py-1 px-6 w-full md:w-auto rounded-md outline-none ml-2 flex items-center bona-nova-regular transition duration-300 ease-in-out hover:bg-white hover:text-red-500 hover:border-red-500"
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
