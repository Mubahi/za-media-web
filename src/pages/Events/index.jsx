import React from "react";
import { useState } from "react";
import Event from "./Event";
import Organizer from "./Organizer";
import Visitor from "./Visitor";
import Parking from "./Parking";
import DigitalInfo from "./DigitalInfo";
const AllEvents = () => {
  const [view, setView] = useState("Event");
  return (
    <>
      {view === "Event" && <Event view={setView} />}
      {view === "Organizer" && <Organizer view={setView} />}
      {view === "Visitor" && <Visitor view={setView} />}
      {view === "Parking" && <Parking view={setView} />}
      {view === "DigitalInfo" && <DigitalInfo view={setView} />}
    </>
  );
};
export default AllEvents;
