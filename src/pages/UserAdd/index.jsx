import React, { useState } from "react";

import UserInfo from "./UserInfo";
import AddNew from "./AddNew";
const UserAdd = ({ Users, Roles, onItemAdded }) => {
  const [View, setView] = useState("UsersAdd");

  const onInfoEdit = () => {
    console.log("chane");
    setView("UserInfo");
  };
  const goToUserAdd = () => {
    setView("UsersAdd");
  };
  const backToUser = () => {
    setView("UsersAdd");
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
          goToUserAdd={goToUserAdd}
          backToUser={backToUser}
          onItemAdded={onItemAdded}
        />
      )}
    </>
  );
};
export default UserAdd;
