import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import EventFlowButtons from "./compnent/EventFlowButtons";
const Event = ({ view }) => {
  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-lg w-96 "
      >
        <EventFlowButtons view={view} />
        <PageHeading Title="Roles" />
        <Divider />
        <FormField
          name="event_address"
          placeholder="Event address"
          type="text"
        />
        <FormField name="event_date" type="date" />
        <FormField
          name="event_days"
          placeholder="Event days"
          type="number"
          min="1"
        />
        <FormField
          name="event_starting_hour"
          placeholder="Event starting hour"
          type="number"
          min="0"
        />
        <FormField
          name="event_closing_hour"
          placeholder="Event closing hour"
          type="number"
          min="0"
        />
      </div>
    </div>
  );
};
export default Event;
