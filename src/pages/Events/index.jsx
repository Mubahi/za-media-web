import React from "react";
import { useState } from "react";
import Organizer from "./Organizer";
import Visitor from "./Visitor";
import Parking from "./Parking";
import DigitalInfo from "./DigitalInfo";
import EventFlowButtons from "./compnent/EventFlowButtons";
import Basic from "./Basic";
import EventVideos from "./Videos";
import { ToastContainer, toast } from "react-toastify";

const { v4: uuidv4 } = require("uuid");

const EventsForm = ({ onItemAdded }) => {
  const [view, setView] = useState("Event");
  const event_id = uuidv4();
  const [Event, setEvent] = useState({ event_id });
  const handleChange = (e) => {
    setEvent({ ...Event, [e.target.name]: e.target.value });
  };
  const handleUrlAdd = (Url) => {
    if (Url) {
      const newVids = [...(Event.event_videos || [])]; // Copy the array if it exists or create a new one if it doesn't
      newVids.push(Url);
      setEvent({ ...Event, event_videos: newVids });
      toast.success("saved url");
    } else {
      toast.error(" Please Enter a Valid Url");
    }
  };
  const handleUrlRemove = (index) => {
    let newVids = [...Event.event_videos];
    newVids.splice(index, 1);
    if (newVids.length === Event.event_videos.length) {
      toast.error("error removing video");
    }
    setEvent((prevEvent) => ({ ...prevEvent, event_videos: newVids }));
  };
  const handleDigitalChange = (name, value) => {
    const newDigitals = { ...(Event.event_digital_info || {}), [name]: value };

    setEvent({ ...Event, event_digital_info: newDigitals });
  };
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
                Event={Event}
                onItemAdded={onItemAdded}
                onDigitalChange={handleDigitalChange}
              />
            )}
            {view === "EventVideos" && (
              <EventVideos
                view={setView}
                Event={Event}
                onUrlAdd={handleUrlAdd}
                onUrlRemove={handleUrlRemove}
              />
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default EventsForm;
