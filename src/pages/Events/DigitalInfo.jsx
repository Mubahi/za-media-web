import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import EventFlowButtons from "./compnent/EventFlowButtons";

const DigitalInfo = ({ view }) => {
  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div className="bg-white p-8 rounded-md shadow-lg w-96 ">
        <EventFlowButtons view={view} />
        <PageHeading Title="Digital Info" />
        <Divider />
        <FormField
          name="event_website"
          placeholder="Event website"
          type="text"
        />
        <FormField
          name="event_twitter"
          placeholder="Event twitter"
          type="text"
        />
        <FormField
          name="event_facebook"
          placeholder="Event facebook"
          type="text"
        />
        <FormField
          name="event_linkedin"
          placeholder="Event linkedin"
          type="text"
        />
        <FormField name="event_email" placeholder="Event email" type="text" />
      </div>
    </div>
  );
};
export default DigitalInfo;
