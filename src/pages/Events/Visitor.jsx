import React from "react";
import Divider from "../../components/Divider";
import PageHeading from "../../components/PageHeadng";
import FormField from "../../components/FormField";
const Visitor = () => {
  return (
    <>
      <PageHeading Title="Visitor Data" />
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
    </>
  );
};
export default Visitor;
