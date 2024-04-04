import React, { useState } from "react";

import UsersAdd from "./UsersAdd";
import UserInfo from "./UserInfo";
const Users = () => {
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
      {View === "UsersAdd" && <UsersAdd onInfoEdit={onInfoEdit} />}
      {View === "UserInfo" && (
        <UserInfo goToUserAdd={goToUserAdd} backToUser={backToUser} />
      )}
    </>
  );
};
export default Users;
