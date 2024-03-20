import { useState } from "react";
import AddNew from "./AddNew";
import SelectModule from "./SelectModule";
const RolesAdd = ({ Roles, Modules }) => {
  const [View, setView] = useState("AddNew");
  return (
    <>
      {View === "AddNew" && <AddNew Roles={Roles} View={setView} />}
      {View === "SelectModule" && (
        <SelectModule Modules={Modules} Roles={Roles} View={setView} />
      )}
    </>
  );
};

export default RolesAdd;
