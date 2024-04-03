import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import FormButton from "../../components/FomButton";
const DigitalInfo = ({ onItemAdded, Event, onChange }) => {
  return (
    <>
      <PageHeading Title="Digital Form" />
      <Divider />
      <FormField
        name="event_website"
        placeholder="Event website"
        type="text"
        onChange={(e) => onChange(e)}
      />
      <FormField
        name="event_twitter"
        placeholder="Event twitter"
        type="text"
        onChange={(e) => onChange(e)}
      />
      <FormField
        name="event_facebook"
        placeholder="Event facebook"
        type="text"
        onChange={(e) => onChange(e)}
      />
      <FormField
        name="event_linkedin"
        placeholder="Event linkedin"
        type="text"
        onChange={(e) => onChange(e)}
      />
      <FormField
        name="event_email"
        placeholder="Event email"
        type="text"
        onChange={(e) => onChange(e)}
      />
      <FormButton
        width="200px"
        value="submit"
        name="save_btn"
        onClick={() => onItemAdded("Event", Event)}
      />
    </>
  );
};
export default DigitalInfo;
