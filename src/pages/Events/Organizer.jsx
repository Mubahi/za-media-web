import React from "react";
import Divider from "../../components/Divider";
import PageHeading from "../../components/PageHeadng";
import FormField from "../../components/FormField";

const Organizer = ({ onChange, Event }) => {
  return (
    <>
      <PageHeading Title="Organizer Info" />
      <Divider />
      <FormField
        name="organizer_name"
        placeholder="Organizer name"
        type="text"
        onChange={(e) => onChange(e)}
      />
      <FormField
        name="organizer_nationality"
        placeholder="Organizer nationality"
        type="text"
        onChange={(e) => onChange(e)}
      />
      <FormField
        name="organizer_phone"
        placeholder="Organizer phone"
        type="number"
        min="0"
        onChange={(e) => onChange(e)}
      />
      <FormField
        name="organizer_whatsapp"
        placeholder="Organizer whatsapp"
        type="number"
        min="0"
        onChange={(e) => onChange(e)}
      />
    </>
  );
};
export default Organizer;
