import { getData } from "./http";

const FetchData = async () => {
  let data = {};

  let pk, sk, begin_with, resp;

  // countries data
  pk = "COUNTRIES#";
  sk = "COUNTRIES#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  data.countries = resp.Items;

  // cities data

  // shops data
  pk = "SHOPS#";
  sk = "SHOPS#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  data.shops = resp.Items;

  // shops categories data
  pk = "SHOPCATEGORIES#";
  sk = "SHOPCATEGORIES#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  data.shopcategories = resp.Items;

  // Brands data
  pk = "BRANDS#";
  sk = "BRANDS#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  data.brands = resp.Items;

  // Areas data
  pk = "AREAS#";
  sk = "AREAS#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  data.areas = resp.Items;

  // Roles data
  pk = "ROLES#";
  sk = "ROLES#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  data.roles = resp.Items;

  // Users data
  pk = "USERS#";
  sk = "USERS#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  data.users = resp.Items;

  // Modules data
  pk = "MODULES#";
  sk = "MODULES#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  data.modules = resp.Items;

  // Modules data
  pk = "EVENTS#";
  sk = "EVENTS#";
  begin_with = true;
  resp = await getData(pk, sk, begin_with);
  data.events = resp.Items;

  return data;
};

export { FetchData };
