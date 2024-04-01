import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import Date from "../../components/Date";
const Event = () => {
  return (
    <>
      <PageHeading Title="Basic info" />
      <Divider />
      <FormField name="event_address" placeholder="Event address" type="text" />
      {/* <FormField name="event_date" placeholder="mm/dd/yyyy" type="date" /> */}
      <Date />
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
    </>
  );
};
export default Event;
