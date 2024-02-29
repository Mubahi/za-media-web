import axios from "axios";
import data from "./config";
import { getCurrentUser } from "./auth";

const User = getCurrentUser();

const { api_url } = data;

// New axio interceptor syntax from
// source: https://stackoverflow.com/questions/68714143/how-can-i-use-axios-interceptors-to-add-some-headers-to-responses
axios.interceptors.request.use(
  (config) => {
    // console.log(config.url);

    if (
      config.url !==
      "https://7dcldl3qo2.execute-api.us-east-1.amazonaws.com/dev/api/uploadImages"
    )
      config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const getData = async (pk, sk, begin_with) => {
  try {
    const data = { pk, sk, begin_with };
    // Make the GET request to fetch categories
    const response = await axios.post(`${api_url}/get-data`, data);

    // Return the categories from the response data
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const saveData = async (PK, SK, item_data) => {
  try {
    const data = { PK, SK, item_data };
    // Make the GET request to fetch categories
    const response = await axios.post(`${api_url}/save-data`, data);

    // Return the categories from the response data
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error saving data:", error);
    throw error;
  }
};
