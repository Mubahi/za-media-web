import { getData } from "./http";

const FetchData = async () => {
  let data = {};

  let pk, sk, begin_with, resp;

  // countries data
  pk = "COUNTRIES#";
  sk = "COUNTRIES#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  // setCountries(resp.Items);
  data.countries = resp.Items;

  // cities data

  // shops data
  pk = "SHOPS#";
  sk = "SHOPS#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  // setAllShops(resp.Items);
  data.shops = resp.Items;

  // shops categories data
  pk = "SHOPCATEGORIES#";
  sk = "SHOPCATEGORIES#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  // setShopCategories(resp.Items);
  data.shopcategories = resp.Items;

  // Brands data
  pk = "BRANDS#";
  sk = "BRANDS#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  // setBrands(resp.Items);
  data.brands = resp.Items;

  // Areas data
  pk = "AREAS#";
  sk = "AREAS#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  // setAreas(resp.Items);
  data.areas = resp.Items;

  // Roles data
  pk = "ROLES#";
  sk = "ROLES#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  // setRoles(resp.Items);
  data.roles = resp.Items;

  // Users data
  pk = "USERS#";
  sk = "USERS#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  // setUsers(resp.Items);
  data.users = resp.Items;

  // Modules data
  pk = "MODULES#";
  sk = "MODULES#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  // setModules(resp.Items);
  data.modules = resp.Items;

  return data;
};

export { FetchData };
