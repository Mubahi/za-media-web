import "./App.css";
import React, { useEffect, useState } from "react";
import LoginForm from "./pages/LoginForm";
import { saveData } from "./services/http";
import useLocalStorage from "./services/useLocalStorage";
import Pages from "./pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FetchData } from "./services/load.data";
import LoadingComponent from "./pages/Loading";

export function App() {
  const [View, setView] = useState("LoginForm");
  const [isLoading, setIsLoading] = useState(false);
  const [Countries, setCountries] = useLocalStorage("zm_countries", []);
  const [AllShops, setAllShops] = useLocalStorage("zm_shops", []);
  const [ShopCategories, setShopCategories] = useLocalStorage(
    "zm_shop_categories",
    []
  );
  const [Brands, setBrands] = useLocalStorage("zm_brands", []);
  const [Areas, setAreas] = useLocalStorage("zm_areas", []);
  const [Roles, setRoles] = useLocalStorage("zm_roles", []);
  const [Users, setUsers] = useLocalStorage("zm_users", []);
  const [User, setUser] = useLocalStorage("zm_user");
  const [Modules, setModules] = useLocalStorage("zm_module", []);

  const fetchData = async () => {
    try {
      const {
        countries,
        shops,
        shopcategories,
        brands,
        areas,
        roles,
        users,
        modules,
      } = await FetchData();

      setCountries(countries);
      setAllShops(shops);
      setShopCategories(shopcategories);
      setBrands(brands);
      setAreas(areas);
      setRoles(roles);
      setUsers(users);
      setModules(modules);

      // Data loaded successfully, set isLoading to false
      setView("Pages");
    } catch (error) {
      console.error("Error fetching initial data:", error);
      // Handle error here
      setIsLoading(false); // Set isLoading to false even if there's an error
    }
  };

  useEffect(() => {
    if (User) {
      setView("Loading");
      fetchData();
    }

    // fetchData();
  }, [User]);

  const handleItemAdded = async (type, item) => {
    // setItems((prevItems) => [...prevItems, item]);
    let PK, SK, item_data, resp;
    switch (type) {
      case "users":
        PK = "USERS#";
        SK = `USERS#${item.id}`;
        item_data = { ...item };
        console.log(resp);
        try {
          resp = await saveData(PK, SK, item_data);
          if (resp.success) {
            let users = [...Users];
            if (item.user_id) {
              const found = users.find((user) => user.user_id === item.user_id);
              const index = users.indexOf(found);
              users[index] = item;
              console.log("old");
            } else {
              users = [resp.data, ...users];
              console.log("new");
            }

            setUsers(users);
          }
          console.log(resp);
        } catch (e) {
          console.log(e);
        }
        break;

      case "role":
        PK = "ROLES#";
        SK = `ROLES#${item.role_id}`;
        item_data = { ...item };

        try {
          resp = await saveData(PK, SK, item_data);
          if (resp.success) {
            let roles = [...Roles];
            if (item.role_id) {
              const found = roles.find((role) => role.role_id === item.role_id);
              const index = roles.indexOf(found);
              roles[index] = item;
              console.log("old");
            } else {
              roles = [resp.data, ...roles];
              console.log("new");
            }

            setRoles(roles);
          }
          console.log(resp);
        } catch (e) {
          console.log(e);
        }
        break;
      case "module":
        try {
          PK = "MODULES#";
          SK = `MODULES#${item.module_id}`;
          item_data = { ...item };
          resp = await saveData(PK, SK, item_data);
          if (resp.success) {
            setModules((prevItem) => [item, ...prevItem]);
            toast.success("Module is saved.");
          }
          console.log(resp);
        } catch (e) {
          console.log(e.message);
          toast.error(e.message);
        }
        break;

      case "Event":
        PK = "EVENTS#";
        SK = `EVENTS#${item.id}`;
        item_data = { ...item };
        // resp = await saveData(PK, SK, item_data);
        // if (resp.success) {
        //   setUsers((prevItem) => [item, ...prevItem]);
        // }
        console.log(item_data, PK, SK);
        break;

      default:
      //do nothing
    }
  };

  const handleLogin = async (user) => {
    setUser(user);
  };

  const IsLoggedIn = () => {
    return !User ? false : true;
  };

  const handleLogout = () => {
    localStorage.removeItem("zm_user");
    window.location.reload();
  };

  return (
    <>
      <LoadingComponent />
      {/* {View === "Loading" && <LoadingComponent />}
      {!IsLoggedIn() && <LoginForm onLogin={handleLogin} />}
      {View === "Pages" && IsLoggedIn() && (
        <Pages
          Shops={AllShops}
          Countries={Countries}
          Areas={Areas}
          Categories={ShopCategories}
          Brands={Brands}
          onItemAdded={handleItemAdded}
          onLogout={handleLogout}
          Modules={Modules}
          Roles={Roles}
        />
      )} */}
      <ToastContainer />
    </>
  );
}

export default App;
