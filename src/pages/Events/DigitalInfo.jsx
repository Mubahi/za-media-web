import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import FormButton from "../../components/FomButton";
const DigitalInfo = ({ onItemAdded, Event }) => {
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
      <FormButton
        Title={"submit"}
        name="save_btn"
        onClick={() => onItemAdded("Event", Event)}
      />
    </>
  );
};
export default DigitalInfo;
