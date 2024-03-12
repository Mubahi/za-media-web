import './App.css';
import React, { useEffect, useState } from 'react';
import LoginForm from './pages/LoginForm';
import { getData } from "./services/http";
import useLocalStorage from "./services/useLocalStorage";
import Pages from './pages';

export function App() {
  const [View, setView] = useState("LoginForm");
  const [Countries, setCountries] = useLocalStorage("zm_countries", []);
  const [AllShops, setAllShops] = useLocalStorage("zm_shops", []);
  const [ShopCategories, setShopCategories] = useLocalStorage(
    "zm_shop_categories",
    []
  );
  const [Brands, setBrands] = useLocalStorage("zm_brands", []);
  const [Areas, setAreas] = useLocalStorage("zm_areas", []);
  const [Roles, setRoles] = useLocalStorage("zm_roles", []);

  useEffect(() => {
    const FetchData = async () => {
      let pk, sk, begin_with, resp;

      // countries data
      pk = "COUNTRIES#";
      sk = "COUNTRIES#";
      begin_with = true;
      resp = await getData(pk, sk, begin_with);
      setCountries(resp.Items);

      // shops data
      pk = "SHOPS#";
      sk = "SHOPS#";
      begin_with = true;
      resp = await getData(pk, sk, begin_with);
      setAllShops(resp.Items);

      // shops categories data
      pk = "SHOPCATEGORIES#";
      sk = "SHOPCATEGORIES#";
      begin_with = true;
      resp = await getData(pk, sk, begin_with);
      setShopCategories(resp.Items);

      // Brands data
      pk = "BRANDS#";
      sk = "BRANDS#";
      begin_with = true;
      resp = await getData(pk, sk, begin_with);
      setBrands(resp.Items);

      // Areas data
      pk = "AREAS#";
      sk = "AREAS#";
      begin_with = true;
      resp = await getData(pk, sk, begin_with);
      setAreas(resp.Items);
      
      // Roles data
      pk = "ROLES#";
      sk = "ROLES#";
      begin_with = true;
      resp = await getData(pk, sk, begin_with);
      setRoles(resp.Items);

    };

    FetchData();
  }, [setCountries,setAllShops,setAreas,setBrands,setShopCategories,setRoles]);
  const handleLogin = () => {
    setView('Pages');
  }
  const handleLogout = () => {
    setView('LoginForm');
  }
  return (
    <>
      {View === 'LoginForm' && (<LoginForm onLogin={handleLogin}/>)}
      {View === 'Pages' && (<Pages 
        Shops={AllShops} 
        Countries={Countries} 
        Areas={Areas} 
        Categories={ShopCategories} 
        Brands={Brands}
        onLogout={handleLogout}
        />)}
    </>
  );
}

export default App;
