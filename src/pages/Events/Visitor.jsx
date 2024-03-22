import React from "react";
import Divider from "../../components/Divider";
import PageHeading from "../../components/PageHeadng";
import FormField from "../../components/FormField";
import EventFlowButtons from "./compnent/EventFlowButtons";

const Visitor = ({ view }) => {
  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div className="bg-white p-8 rounded-md shadow-lg w-96 ">
        <EventFlowButtons view={view} />
        <PageHeading Title="Visitor" />
        <Divider />
        <FormField
          name="total_visitors"
          placeholder="Total visitors"
          type="number"
          min="0"
        />
        <FormField
          name="visitors_last_year"
          placeholder="visitors last year"
          type="number"
          min="0"
        />
      </div>
    </div>
  );
};
export default Visitor;
