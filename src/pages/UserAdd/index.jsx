import React, { useState } from "react";

import UserInfo from "./UserInfo";
import AddNew from "./AddNew";
const UserAdd = ({ Users }) => {
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
      {View === "UsersAdd" && <AddNew onInfoEdit={onInfoEdit} Users={Users} />}
      {View === "UserInfo" && (
        <UserInfo goToUserAdd={goToUserAdd} backToUser={backToUser} />
      )}
    </>
  );
};
export default UserAdd;
