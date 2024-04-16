import React, { useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import PageHeading from "../components/PageHeadng";
import Divider from "../components/Divider";
import FormField from "../components/FormField";
import { toast } from "react-toastify";
import FormButton from "../components/FomButton";
import { validateObject } from "../Global/validationUtils";
const { v4: uuidv4 } = require("uuid");

const ModulesAdd = ({ Modules, onItemAdded }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const module_id = uuidv4();
  const [CurrentModule, setCurrentModule] = useState({ module_id });
  const keysToCheck = ["module_name", "module_title"];
  const handleSubmit = () => {
    console.log("submit");

    if (validateObject(CurrentModule, keysToCheck)) {
      onItemAdded("module", CurrentModule);
      setCurrentModule({ ...CurrentModule, module_id: uuidv4() });
    } else {
      toast.error(`Please fill out the name correctly`);
    }
  };
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

            <FormButton width="100%" value="Submit" onClick={handleSubmit} />
          </div>
        </div>
        <div className="bg-[#D8D9DA] overflow-hidden ml-4 flex-1">
          <table className="w-full text-center border border-orange-500">
            <thead>
              <tr className="bg-[#CECFD1] text-[#FF7D31]">
                <th className="border-b border-orange-500">Name</th>
                <th className="border-b border-orange-500">Title</th>
                {/* <th className="border-b border-orange-500">Delete</th> */}
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
                  {/* <td className="border-b border-r px-1 border-orange-500">
                    <button className="px-2 my-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-trash-fill text-red-500 hover:text-red-600"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                      </svg>
                    </button>
                  </td> */}
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
