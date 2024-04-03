import httpService from "./http";
import config from "./config.json";

const { api_url } = config;

export async function loginUser(user_info) {
  const url = `${api_url}/login`;
  try {
    const { data } = await httpService.post(url, user_info);
    // console.log(data);

    if (!data.error) {
      login_user_locally(data);
      return data;
    }
  } catch (e) {
    // console.log(e);
    throw new Error(e.response.data);
  }
}

export function login_user_locally(user_data) {
  localStorage.setItem("zm_user", JSON.stringify(user_data.user));
}

export function logout() {
  localStorage.removeItem("zm_user");
}

export function getUserID() {
  try {
    let user = localStorage.getItem("zm_user");
    user = JSON.parse(user);
    return user.UserId;
  } catch (ex) {
    return null;
  }
}

export function getCurrentUser() {
  try {
    const user = localStorage.getItem("zm_user");
    return JSON.parse(user);
  } catch (ex) {
    return null;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loginUser,
  logout,
  getCurrentUser,
};
