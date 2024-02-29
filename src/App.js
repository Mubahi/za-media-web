import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Dashboard from './Dashboard';
import Homescreen from './pages/Homescreen';
import DataOne from './pages/cardsdata/DataOne';
import { useEffect, useState } from "react";
import { getData, saveData } from "./services/http";
import useLocalStorage from "./services/useLocalStorage";

export function App() {
  const [View, setView] = useState("Dashboard");
  const [Countries, setCountries] = useLocalStorage("zm_countries", []);
  const [AllShops, setAllShops] = useLocalStorage("zm_shops", []);
  const [ShopCategories, setShopCategories] = useLocalStorage(
    "zm_shop_categories",
    []
  );
  const [Brands, setBrands] = useLocalStorage("zm_brands", []);
  const [Areas, setAreas] = useLocalStorage("zm_areas", []);
  const [Products, setProducts] = useLocalStorage("zm_products", []);
  const [SelectedShop, setSelectedShop] = useState({});

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
      console.log(resp.Items);

      // Products data
      pk = "PRODUCTS#";
      sk = "PRODUCTS#";
      begin_with = true;
      resp = await getData(pk, sk, begin_with);
      setProducts(resp.Items);
    };

    FetchData();
  }, [setCountries]);
  console.log(AllShops);
  return (
    <>
    
    </>
  );
}

export default App;
