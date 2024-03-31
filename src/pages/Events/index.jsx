import React from "react";
import { useState } from "react";
import Event from "./Event";
import Organizer from "./Organizer";
import Visitor from "./Visitor";
import Parking from "./Parking";
import DigitalInfo from "./DigitalInfo";
import EventFlowButtons from "./compnent/EventFlowButtons";
const AllEvents = () => {
  const [view, setView] = useState("Event");
  return (
    <>
      <div className="pt-28 min-h-screen flex justify-center bg-white pb-10">
        <div
          data-aos="fade-down"
          className="bg-[#D8D9DA] rounded-md shadow-lg flex w-11/12"
        >
          <div className="w-2/2 border-r-2 bg-[#CECFD1] border-orange-500">
            <EventFlowButtons view={setView} />
          </div>
          <div className="w-10/12 ml-5 my-10">
            {view === "Event" && <Event view={setView} />}
            {view === "Organizer" && <Organizer view={setView} />}
            {view === "Visitor" && <Visitor view={setView} />}
            {view === "Parking" && <Parking view={setView} />}
            {view === "DigitalInfo" && <DigitalInfo view={setView} />}
          </div>
        </div>
      </div>
    </>
  );
};
export default AllEvents;
