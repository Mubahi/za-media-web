import React, { useState } from "react";

const EventFlowButtons = ({ view }) => {
  const [selectedButton, setSelectedButton] = useState("Event");

  const handleClick = (selected) => {
    setSelectedButton(selected);
    view(selected);
  };

  return (
    <div className="flex flex-col h-full justify-center w-32">
      <button
        onClick={() => handleClick("Event")}
        className={`font-bold px-1 py-1  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-300 ${
          selectedButton === "Event"
            ? "bg-orange-500  text-white"
            : " text-black border-orange-500 hover:bg-orange-200"
        } `}
      >
        Event
      </button>{" "}
      <button
        onClick={() => handleClick("Organizer")}
        className={`font-bold px-1 py-1  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-300 ${
          selectedButton === "Organizer"
            ? "bg-orange-500  text-white"
            : " text-black border-orange-500 hover:bg-orange-200"
        } `}
      >
        Organizer
      </button>{" "}
      <button
        onClick={() => handleClick("Visitor")}
        className={`font-bold px-1 py-1  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-300 ${
          selectedButton === "Visitor"
            ? "bg-orange-500  text-white"
            : " text-black border-orange-500 hover:bg-orange-200"
        } `}
      >
        Visitor
      </button>{" "}
      <button
        onClick={() => handleClick("Parking")}
        className={`font-bold px-1 py-1  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-300 ${
          selectedButton === "Parking"
            ? "bg-orange-500  text-white"
            : " text-black border-orange-500 hover:bg-orange-200"
        } `}
      >
        Parking
      </button>{" "}
      <button
        onClick={() => handleClick("DigitalInfo")}
        className={`font-bold px-1 py-1  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-300 ${
          selectedButton === "DigitalInfo"
            ? "bg-orange-500  text-white"
            : " text-black border-orange-500 hover:bg-orange-200"
        } `}
      >
        Digital
      </button>
    </div>
  );
};

export default EventFlowButtons;
