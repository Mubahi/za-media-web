import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import PageHeading from "../components/PageHeadng";
import Divider from "../components/Divider";
import FormButton from "../components/FomButton";
import FormFields from "../components/FormFields";
const Users = (Title) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-lg w-2/6"
      >
        <PageHeading Title="Users" />
        <Divider />
        <FormFields
          name="Username..."
          placeholder="Username..."
          required={true}
        />
        <FormFields
          name="Username..."
          placeholder="Username..."
          required={true}
          className="mt-4"
        />
        <FormButton Title="Submit" />
      </div>
    </div>
  );
};
export default Users;
