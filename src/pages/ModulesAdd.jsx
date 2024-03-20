import React, { useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import PageHeading from "../components/PageHeadng";
import Divider from "../components/Divider";
import FormField from "../components/FormField";
const { v4: uuidv4 } = require("uuid");

const ModulesAdd = ({ Modules, onItemAdded }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const module_id = uuidv4();

  const [CurrentModule, setCurrentModule] = useState({ module_id });
  // console.log(CurrentModule);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-md w-96"
      >
        <PageHeading Title="Modules" />
        <Divider />
        <form>
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
          onClick={() => onItemAdded("module", CurrentModule)}
          className="border-2 border-yellow-500 bg-yellow-500 text-white py-1 w-full rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold roboto-mono flex justify-center items-center mt-3"
        >
          Submit
        </button>
        {Modules.map((module) => {
          return module.name;
        })}
      </div>
    </div>
  );
};
export default ModulesAdd;
