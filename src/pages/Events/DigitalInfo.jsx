import React, { useState } from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import FormButton from "../../components/FomButton";
const DigitalInfo = ({ onItemAdded, Event }) => {
  const [event_digital_info, setevent_digital_info] = useState({});
  const HandleChange = (e) => {
    setevent_digital_info({
      ...event_digital_info,
      [e.target.name]: e.target.value,
    });
  };
  console.log(event_digital_info);
  return (
    <>
      <PageHeading Title="Digital Form" />
      <Divider />
      <FormField
        name="event_website"
        placeholder="Event website"
        type="text"
        onChange={HandleChange}
      />
      <FormField
        name="event_twitter"
        placeholder="Event twitter"
        type="text"
        onChange={HandleChange}
      />
      <FormField
        name="event_facebook"
        placeholder="Event facebook"
        type="text"
        onChange={HandleChange}
      />
      <FormField
        name="event_linkedin"
        placeholder="Event linkedin"
        type="text"
        onChange={HandleChange}
      />
      <FormField
        name="event_email"
        placeholder="Event email"
        type="text"
        onChange={HandleChange}
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
