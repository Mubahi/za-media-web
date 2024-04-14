import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import Date from "../../components/Date";
import VideoUrl from "./compnent/VideoUrl";
import FormButton from "../../components/FomButton";
const { v4: uuidv4 } = require("uuid");

const EventsForm = () => {
  const event_id = uuidv4();

  return (
    <>
      <div className="pt-28 min-h-screen flex justify-center bg-white pb-10">
        <div className="bg-[#D8D9DA] shadow-lg w-11/12 rounded-md px-10 pb-5 relative">
          <PageHeading Title="Events Form" />
          <Divider />
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">Events</h1>
          <div className="flex gap-4 m-0 p-0">
            <FormField
              className="w-full"
              name="event_title"
              placeholder="Event title"
              type="text"
              // value={Event.event_title}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full leading-5"
              marginTop={5}
              name="event_date"
              placeholder="Date"
              type="date"
            />
          </div>
          {/* <Date
                name="event_date"
                label="Event date"
                // value={Event.event_date}
                // onChange={(e) => onChange(e)}
              /> */}
          <div className="flex gap-4">
            <FormField
              className="w-full"
              name="event_starting_time"
              placeholder="Event starting time"
              type="text"
              min="0"
              // value={Event.event_starting_hour}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="event_closing_time"
              placeholder="Event closing time"
              type="text"
              min="0"
              // value={Event.event_closing_hour}
              // onChange={(e) => onChange(e)}
            />
          </div>
          <div className="flex gap-4">
            <FormField
              className="w-full"
              name="parking_slots"
              placeholder="Parking slots"
              type="number"
              min="0"
              // value={Event.parking_slots}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="event_address"
              placeholder="Event address"
              type="text"
              // value={Event.event_address}
              // onChange={(e) => onChange(e)}
            />
          </div>
          <FormField
            name="event_days"
            placeholder="Event days"
            type="number"
            min="1"
            // value={Event.event_days}
            // onChange={(e) => onChange(e)}
          />
        </div>

        <FormButton
          width="65px"
          value="Submit"
          name="save_btn"
          className="fixed bottom-20 right-20"
          // onClick={() => onItemAdded("Event", Event)}
        />
      </div>
      <ToastContainer />
    </>
  );
};
export default EventsForm;
