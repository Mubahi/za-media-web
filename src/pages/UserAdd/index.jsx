import React, { useState } from "react";

import UserInfo from "./UserInfo";
import AddNew from "./AddNew";
const UserAdd = ({ Users, Roles, onItemAdded }) => {
  const [View, setView] = useState("UsersAdd");
  const [SelectedUser, setSelectedUser] = useState({});
  const onInfoEdit = (user) => {
    setSelectedUser(user);
    setView("UserInfo");
  };
  const goToUserAdd = () => {
    setView("UsersAdd");
  };
  const backToUser = () => {
    setView("UsersAdd");
  };
  const handleInfoChange = (name, value) => {
    setSelectedUser({ ...SelectedUser, [name]: value });
  };
  const handleSave = () => {
    onItemAdded("user", SelectedUser);
  };

  return (
    <>
      {View === "UsersAdd" && (
        <AddNew
          onInfoEdit={onInfoEdit}
          Users={Users}
          Roles={Roles}
          onItemAdded={onItemAdded}
        />
      )}
      {View === "UserInfo" && (
        <UserInfo
          Roles={Roles}
          goToUserAdd={goToUserAdd}
          backToUser={backToUser}
          onItemAdded={onItemAdded}
          SelectedUser={SelectedUser}
          onInfoChange={handleInfoChange}
          onSave={handleSave}
        />
      )}
    </>
  );
};
export default UserAdd;
