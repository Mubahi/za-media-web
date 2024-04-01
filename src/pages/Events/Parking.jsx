import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
const Parking = () => {
  return (
    <>
      <PageHeading Title="Parking" />
      <Divider />
      <FormField
        name="parking_slots"
        placeholder="Parking slots"
        type="number"
        min="0"
      />
    </>
  );
};
export default Parking;
