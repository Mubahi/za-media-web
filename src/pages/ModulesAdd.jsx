import React, { useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import PageHeading from "../components/PageHeadng";
import Divider from "../components/Divider";
import FormField from "../components/FormField";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import FormButton from "../components/FomButton";
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
    <div className="min-h-screen flex justify-center items-center">
      <div
        data-aos="fade-down"
        className="bg-[#D8D9DA] p-8 rounded-md shadow-lg w-4/5 flex flex-col md:flex-row"
      >
        <div className="flex-1 border-r border-orange-500 pr-5">
          <div>
            <PageHeading Title="Module" />
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

            <FormButton width="100%" value="Submit" />
          </div>
        </div>
        <div className="bg-[#D8D9DA] overflow-hidden ml-4 flex-1">
          <table className="w-full text-center border border-orange-500">
            <thead>
              <tr className="bg-[#CECFD1] text-[#FF7D31]">
                <th className="border-b border-orange-500">Name</th>
                <th className="border-b border-orange-500">Title</th>
              </tr>
            </thead>
            <tbody>
              {Modules.map((module, index) => (
                <tr key={index}>
                  <td className="border-b border-r border-orange-500">
                    {module.module_name}
                  </td>
                  <td className="border-b border-r border-orange-500">
                    {module.module_title}
                  </td>
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
