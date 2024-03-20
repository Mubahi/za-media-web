import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import PageHeading from "../components/PageHeadng";
import Divider from "../components/Divider";
import FormButton from "../components/FomButton";
import FormField from "../components/FormField";
const Users = (Title) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-lg w-96"
      >
        <PageHeading Title="Users" />
        <Divider />
        <FormField name="Username..." placeholder="Username..." type="text" />
        <FormField
          name="passward..."
          placeholder="passward..."
          type="Password"
        />
        <FormButton Title="Submit" />
      </div>
    </div>
  );
};
export default Users;
