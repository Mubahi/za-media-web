import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
const Parking = ({ onChange, Event }) => {
  return (
    <>
      <PageHeading Title="Parking" />
      <Divider />
      <FormField
        name="parking_slots"
        placeholder="Parking slots"
        type="number"
        min="0"
        value={Event.parking_slots}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};
export default Parking;
