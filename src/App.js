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
  const [Events, setEvents] = useLocalStorage("zm_events", []);

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
        events,
      } = await FetchData();

      setCountries(countries);
      setAllShops(shops);
      setShopCategories(shopcategories);
      setBrands(brands);
      setAreas(areas);
      setRoles(roles);
      setUsers(users);
      setModules(modules);
      setEvents(events);

      // Data loaded successfully, set isLoading to false
      setView("Pages");
    } catch (error) {
      console.error("Error fetching initial data:", error);
      // Handle error here
      setIsLoading(false); // Set isLoading to false even if there's an error
    }
  };

  useEffect(() => {
    if (View === "LoginForm") {
      if (User) {
        setView("Loading");
        fetchData();
      }
    }

    // fetchData();
  }, [User]);

  const handleItemAdded = async (type, item) => {
    // setItems((prevItems) => [...prevItems, item]);
    let PK, SK, item_data, resp;
    switch (type) {
      case "user":
        try {
          PK = "USERS#";
          SK = `USERS#${item.user_email}`;
          item_data = { ...item };
          resp = await saveData(PK, SK, item_data);
          if (resp.success) {
            const founduser = Users.find(
              (user) => user.user_id === item.user_id
            );
            const index = Users.indexOf(founduser);
            if (founduser) {
              Users[index] = item;
              toast.success("User is edited.");
            } else {
              setUsers((prevItem) => [item, ...prevItem]);
              toast.success("User is saved.");
            }
            console.log(founduser, index);
          }
          console.log(resp);
        } catch (e) {
          console.log(e.message);
          toast.error(e.message);
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
            const found = roles.find((role) => role.role_id === item.role_id);
            const index = roles.indexOf(found);
            if (found) {
              Roles[index] = resp.data;
              toast.success("Role Edited successfully!");
            } else {
              setRoles((prevItem) => [item, ...prevItem]);
              toast.success("Role added successfully!");
            }
          }
          console.log(resp);
        } catch (e) {
          toast.success(e.message);
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
        try {
          PK = "EVENTS#";
          SK = `EVENTS#${item.event_id}`;
          item_data = { ...item };
          resp = await saveData(PK, SK, item_data);
          if (resp.success) {
            const found_event = Events.find(
              (event) => event.event_id === item.event_id
            );
            const index = Events.indexOf(found_event);
            if (found_event) {
              Events[index] = item;
              toast.success("Event Saved : ");
            } else {
              Events.push(item);
              toast.success("Event Saved : ");
            }
          }
          console.log(item_data, PK, SK);
        } catch (e) {
          toast.error(e.message);
          console.log(e);
        }
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
      {/* <LoadingComponent /> */}
      {View === "Loading" && <LoadingComponent />}
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
          Users={Users}
          Events={Events}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
