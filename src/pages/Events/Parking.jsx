import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import EventFlowButtons from "./compnent/EventFlowButtons";

const Parking = ({ view }) => {
  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div className="bg-white p-8 rounded-md shadow-lg w-96 ">
        <EventFlowButtons view={view} />
        <PageHeading Title="Parking" />
        <Divider />
        <FormField
          name="parking_slots"
          placeholder="Parking slots"
          type="number"
          min="0"
        />
      </div>
    </div>
  );
};
export default Parking;
