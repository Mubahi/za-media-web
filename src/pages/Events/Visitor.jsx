import React from "react";
import Divider from "../../components/Divider";
import PageHeading from "../../components/PageHeadng";
import FormField from "../../components/FormField";
const Visitor = ({ onChange, Event }) => {
  return (
    <>
      <PageHeading Title="Visitors Info" />
      <Divider />
      <FormField
        name="total_visitors"
        placeholder="Total visitors"
        type="number"
        min="0"
        value={Event.total_visitors}
        onChange={(e) => onChange(e)}
      />
      <FormField
        name="visitors_last_year"
        placeholder="visitors last year"
        type="number"
        min="0"
        value={Event.visitors_last_year}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};
export default Visitor;
