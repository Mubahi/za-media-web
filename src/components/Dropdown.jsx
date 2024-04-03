import React, { useState, useRef, useEffect } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.id !== "dropdownDelayButton"
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <button
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        className="text-black border-l-2 border-orange-500 w-full mt-4 bg-white font-base font-semibold text-sm px-2 py-2.5 flex items-center justify-between"
        type="button"
        onClick={toggleDropdown}
        style={{ position: "relative" }}
      >
        Roles
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

      {isOpen && (
        <div
          id="user_role"
          ref={dropdownRef}
          className="z-10 bg-white divide-y divide-gray-100 border-l-2 border-orange-500 shadow w-1/4"
          style={{
            position: "absolute",
            top: "calc(75% + 10px)",
            left: "10",
          }}
        >
          <ul
            className="text-sm text-black"
            aria-labelledby="dropdownDelayButton"
          >
            <li>
              <button className="px-4 hover:bg-orange-100 w-full text-left text-base">
                Dashboard
              </button>
            </li>
            <li>
              <button className="px-4 hover:bg-orange-100 w-full text-left text-base">
                Dashboard
              </button>
            </li>
            <li>
              <button className="px-4 hover:bg-orange-100 w-full text-left text-base">
                Dashboard
              </button>
            </li>
            <li>
              <button className="px-4 hover:bg-orange-100 w-full text-left text-base">
                Dashboard
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
