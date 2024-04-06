import React from "react";
import { useState } from "react";
import Organizer from "./Organizer";
import Visitor from "./Visitor";
import Parking from "./Parking";
import DigitalInfo from "./DigitalInfo";
import EventFlowButtons from "./compnent/EventFlowButtons";
import Basic from "./Basic";
import Videos from "./Videos";
import EventVideos from "./Videos";
const { v4: uuidv4 } = require("uuid");

const AllEvents = ({ onItemAdded }) => {
  const [view, setView] = useState("Event");
  const [Event, setEvent] = useState({ id: uuidv4() });
  const handleChange = (e) => {
    setEvent({ ...Event, [e.target.name]: e.target.value });
  };
  console.log(Event);
  return (
    <>
      <div className="pt-28 min-h-screen flex justify-center bg-white pb-10">
        <div
          data-aos="fade-down"
          className="bg-[#D8D9DA] shadow-lg flex flex-col md:flex-row w-11/12 rounded-md"
        >
          <div className="w-full md:w-32 border-b md:border-b-0 md:border-r-2 bg-[#CECFD1] border-orange-500 rounded-l-md">
            <EventFlowButtons view={setView} />
          </div>
          <div className="w-full md:w-5/6 ml-0 md:ml-5 my-5 md:my-10">
            {view === "Event" && (
              <Basic view={setView} Event={Event} onChange={handleChange} />
            )}
            {view === "Organizer" && (
              <Organizer view={setView} Event={Event} onChange={handleChange} />
            )}
            {view === "Visitor" && (
              <Visitor view={setView} Event={Event} onChange={handleChange} />
            )}
            {view === "Parking" && (
              <Parking view={setView} Event={Event} onChange={handleChange} />
            )}
            {view === "DigitalInfo" && (
              <DigitalInfo
                view={setView}
                onItemAdded={onItemAdded}
                Event={Event}
              />
            )}
            {view === "EventVideos" && (
              <EventVideos view={setView} Event={Event} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AllEvents;
