import React from "react";
import Divider from "../../components/Divider";
import PageHeading from "../../components/PageHeadng";
import FormField from "../../components/FormField";

const Organizer = () => {
  return (
    <>
      <PageHeading Title="Organizer Data" />
      <Divider />
      <FormField
        name="organizer_name"
        placeholder="Organizer name"
        type="text"
      />
      <FormField
        name="organizer_nationality"
        placeholder="Organizer nationality"
        type="text"
      />
      <FormField
        name="organizer_phone"
        placeholder="Organizer phone"
        type="number"
        min="0"
      />
      <FormField
        name="organizer_whatsapp"
        placeholder="Organizer whatsapp"
        type="number"
        min="0"
      />
    </>
  );
};
export default Organizer;
