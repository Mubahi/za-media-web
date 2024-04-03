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
  return (
    <>
      {View === "UsersAdd" && <UsersAdd onInfoEdit={onInfoEdit} />}
      {View === "UserInfo" && <UserInfo goToUserAdd={goToUserAdd} />}
    </>
  );
};
export default Users;
