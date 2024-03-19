import React, { useState } from "react";
import AllShops from "./AllShops";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Homescreen from "../pages/Homescreen";
import ShopData from "../ShopData/ShopData";
import Roles from "../pages/Roles";
import Modules from "../pages/Modules";
import Users from "./Users";
import Events from "./Events";
const Pages = ({ Shops, Countries, Brands, Categories, Areas, onLogout }) => {
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
      {View === "Roles" && <Roles onClick={Roles} />}
      {View === "Modules" && <Modules onClick={Modules} />}
      {View === "Users" && <Users onClick={Users} />}
      <Footer />
    </>
  );
};
export default Pages;
