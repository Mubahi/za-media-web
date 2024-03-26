import React, { useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import PageHeading from "../components/PageHeadng";
import Divider from "../components/Divider";
import FormField from "../components/FormField";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
const { v4: uuidv4 } = require("uuid");

const ModulesAdd = ({ Modules, onItemAdded }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const module_id = uuidv4();
  const handleSubmit = () => {
    onItemAdded("module", CurrentModule);
    setCurrentModule({ ...CurrentModule, module_id: uuidv4() });
  };
  const [CurrentModule, setCurrentModule] = useState({ module_id });
  console.log(CurrentModule);
  console.log(Modules);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-md w-full md:max-w-3xl md:mt-20 flex flex-col md:flex-row"
      >
        <div className="flex-1 border-r border-orange-500 pr-5">
          <div>
            <PageHeading Title="Modules" />
            <Divider />
            <form className="flex flex-col">
              <FormField
                name="module_title"
                placeholder="Module Title"
                required={true}
                onChange={(e) =>
                  setCurrentModule({
                    ...CurrentModule,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <FormField
                name="module_name"
                placeholder="Module Name"
                required={true}
                onChange={(e) =>
                  setCurrentModule({
                    ...CurrentModule,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </form>
            <button
              onClick={handleSubmit}
              className="border-2 border-yellow-500 bg-yellow-500 text-white py-1 w-full rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold roboto-mono mt-3"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="bg-orange-100 rounded-lg overflow-hidden ml-4 flex-1">
          <table className="w-full max-w-md mx-auto text-center">
            <thead className="bg-orange-200">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Title</th>
              </tr>
            </thead>
            <tbody>
              {Modules.map((module, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{module.module_name}</td>
                  <td className="py-2 px-4">{module.module_title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ModulesAdd;
