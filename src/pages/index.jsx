import React, { useState } from "react";
import AllShops from "./AllShops";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Homescreen from "../pages/Homescreen";
import ShopData from "../ShopData/ShopData";
import Users from "./Users";
import Events from "./Events";
import ModulesAdd from "./ModulesAdd";
import RolesAdd from "./RolesAdd";
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
      {View === "AllShops" && (
        <AllShops
          Shops={Shops}
          Countries={Countries}
          Areas={Areas}
          Categories={Categories}
          Brands={Brands}
        />
      )}
      {View === "Events" && <Events />}
      {View === "Roles" && (
        <RolesAdd onItemAdded={onItemAdded} Modules={Modules} Roles={Roles} />
      )}
      {View === "ModulesAdd" && (
        <ModulesAdd Modules={Modules} onItemAdded={onItemAdded} />
      )}
      {View === "Users" && <Users onClick={Users} onItemAdded={onItemAdded} />}
      <Footer />
    </>
  );
};
export default Pages;
