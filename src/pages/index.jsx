import React, { useState } from "react";
import AllShops from "./AllShops/AllShops";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Homescreen from "../pages/Homescreen";
import ModulesAdd from "./ModulesAdd";
import RolesAdd from "./RolesAdd";
import UserAdd from "./UserAdd";
import AllEvents from "./Events/AllEvents/AllEvents";
import EventsForm from "./Events";
import ShopData from "./AllShops/ShopData";
const Pages = ({
  Shops,
  Countries,
  Brands,
  Categories,
  Areas,
  onLogout,
  Modules,
  Roles,
  onItemAdded,
  Users,
  Events,
  onItemDelete,
}) => {
  const [View, setView] = useState("Home");
  const [Shop, setShop] = useState([]);
  const HandleActivePage = (page) => {
    setView(page);
  };
  const HandleViewShop = (shop) => {
    setShop(shop);
    HandleActivePage("ShopData");
  };
  return (
    <>
      <Nav setActive={HandleActivePage} View={View} onLogout={onLogout} />
      {View === "Home" && (
        <Homescreen
          shops={Shops}
          Countries={Countries}
          ViewShop={HandleViewShop}
        />
      )}
      {View === "ShopData" && (
        <ShopData shop={Shop} Countries={Countries} Areas={Areas} />
      )}
      {View === "AllEvents" && <AllEvents Events={Events} />}
      {View === "AllShops" && (
        <AllShops
          Shops={Shops}
          Countries={Countries}
          Areas={Areas}
          Categories={Categories}
          Brands={Brands}
          onViewShop={HandleViewShop}
        />
      )}
      {View === "Events" && (
        <EventsForm
          onItemAdded={onItemAdded}
          Countries={Countries}
          Areas={Areas}
        />
      )}
      {View === "Users" && (
        <UserAdd
          Users={Users}
          Roles={Roles}
          onItemAdded={onItemAdded}
          onItemDelete={onItemDelete}
        />
      )}
      {View === "Roles" && (
        <RolesAdd onItemAdded={onItemAdded} Modules={Modules} Roles={Roles} />
      )}
      {View === "ModulesAdd" && (
        <ModulesAdd Modules={Modules} onItemAdded={onItemAdded} />
      )}
      <Footer />
    </>
  );
};
export default Pages;
