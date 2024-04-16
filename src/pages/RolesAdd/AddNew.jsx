import PageHeading from "../../components/PageHeadng";
import FormField from "../../components/FormField";
import Divider from "../../components/Divider";
import FormButton from "../../components/FomButton";
import { useState } from "react";
import { toast } from "react-toastify";
import { validateObject } from "../../Global/validationUtils";
const { v4: uuidv4 } = require("uuid");
const AddNew = ({ Roles, onSetPerm, onItemAdded }) => {
  const role_id = uuidv4();
  const [Role, setRole] = useState({ role_id });
  const keysToCheck = ["role_id", "role_name"];
  const handleSubmit = () => {
    console.log("submit");

    if (validateObject(Role, keysToCheck)) {
      onItemAdded("role", Role);
      setRole({ role_id });
      console.log("item adde");
    } else {
      toast.error(`Please fill out the name correctly`);
      console.log("not added");
    }
  };
  const handleEdit = (role) => {
    setRole(role);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        data-aos="fade-down"
        className="bg-[#D8D9DA] p-8 rounded-md shadow-lg w-4/5 flex flex-col md:flex-row"
      >
        <div className="flex-1 border-r border-orange-500 pr-5">
          <div>
            <PageHeading Title="Role" />
            <Divider />
            <div className="flex flex-col">
              <FormField
                value={Role.role_name ? Role.role_name : ""}
                name="role_name"
                placeholder="Enter role"
                onChange={(e) =>
                  setRole({ ...Role, [e.target.name]: e.target.value })
                }
              />
              <FormButton
                width="100%"
                value={"submit"}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#D8D9DA]  overflow-hidden ml-4 flex-1">
          <table className="w-full text-center border border-orange-500">
            <thead>
              <tr className="bg-[#CECFD1] text-[#FF7D31]">
                <th className="border-b border-orange-500">Name</th>
                <th className="border-b border-orange-500">Edit</th>
                <th className="border-b border-orange-500">Permissions</th>
                {/* <th className="border-b border-orange-500">Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {Roles.map((role, index) => (
                <tr key={index}>
                  <td className="border-b border-r border-orange-500">
                    {role.role_name}
                  </td>
                  <td className="border-b border-r border-orange-500">
                    <button onClick={() => handleEdit(role)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="text-orange-500 hover:text-orange-600 bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                      </svg>
                    </button>
                  </td>
                  <td className="border-b border-r border-orange-500">
                    <button
                      onClick={() => onSetPerm(role)}
                      className="bg-orange-400 px-2 rounded-md hover:bg-orange-600 transition-all duration-300 pb-2 my-1 text-white font-bold"
                    >
                      p
                    </button>
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

export default AddNew;
