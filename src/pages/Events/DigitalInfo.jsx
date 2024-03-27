import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
const DigitalInfo = () => {
  return (
    <>
      <PageHeading Title="Digital Form" />
      <Divider />
      <FormField name="event_website" placeholder="Event website" type="text" />
      <FormField name="event_twitter" placeholder="Event twitter" type="text" />
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
    </>
  );
};
export default DigitalInfo;
