import { useState } from "react";
import AddNew from "./AddNew";
import SetPermissions from "./SetPermissions";

const RolesAdd = ({ Roles, Modules, onItemAdded }) => {
  const [View, setView] = useState("AddNew");
  const [SelectedRole, setSelectedRole] = useState({});
  const handleSetPerm = (role) => {
    setView("SelectModule");
    setSelectedRole(role);
  };
  const onSavePerm = (perm) => {
    const role = { ...SelectedRole, permissions: perm };
    // setSelectedRole(role);
    // onItemAdded("role", role);
    // setView("AddNew");
    console.log(role);
  };
  return (
    <>
      {View === "AddNew" && (
        <AddNew
          Roles={Roles}
          View={setView}
          onItemAdded={onItemAdded}
          onSetPerm={handleSetPerm}
        />
      )}
      {View === "SelectModule" && (
        <SetPermissions
          Modules={Modules}
          Roles={Roles}
          View={setView}
          onSavePerm={onSavePerm}
          SelectedRole={SelectedRole}
        />
      )}
    </>
  );
};

export default RolesAdd;
