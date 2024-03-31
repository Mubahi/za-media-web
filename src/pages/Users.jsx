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
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
      <div
        data-aos="fade-down"
        className="bg-[#D8D9DA] p-8 rounded-md shadow-lg w-4/5 flex flex-col md:flex-row"
      >
        <div className="flex-1 border-r border-orange-500 pr-5">
          <PageHeading Title="Users" />
          <Divider />
          <form className="flex flex-col">
            <FormField
              name="Username..."
              placeholder="Username..."
              type="text"
            />
            <FormField
              name="passward..."
              placeholder="passward..."
              type="Password"
            />
            <FormButton Title="Submit" />
          </form>
        </div>
        <div className="bg-orange-100 rounded-lg overflow-hidden ml-4 flex-1">
          <table className="w-full text-center">
            <thead className="bg-orange-300">
              <tr>
                <th className="border-b border-orange-500">Name</th>
                <th className="border-b border-orange-500">Title</th>
              </tr>
            </thead>
            <tbody>
              {/* {Modules.map((module, index) => ( */}
              <tr>
                <td className="border-b border-orange-500">users</td>
                <td className="border-b border-orange-500">frontend</td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Users;
