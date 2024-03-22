import React from "react";
import Divider from "../../components/Divider";
import PageHeading from "../../components/PageHeadng";
import FormField from "../../components/FormField";
import EventFlowButtons from "./compnent/EventFlowButtons";

const Organizer = ({ view }) => {
  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div className="bg-white p-8 rounded-md shadow-lg w-96 ">
        <EventFlowButtons view={view} />
        <PageHeading Title="Organizer" />
        <Divider />
        <FormField
          name="organizer_name"
          placeholder="Organizer name"
          type="text"
        />
        <FormField
          name="organizer_nationality"
          placeholder="Organizer nationality"
          type="text"
        />
        <FormField
          name="organizer_phone"
          placeholder="Organizer phone"
          type="number"
          min="0"
        />
        <FormField
          name="organizer_whatsapp"
          placeholder="Organizer whatsapp"
          type="number"
          min="0"
        />
      </div>
    </div>
  );
};
export default Organizer;
