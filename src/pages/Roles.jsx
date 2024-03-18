import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import PageHeading from "../components/PageHeadng";
import Divider from "../components/Divider";
import FormButton from "../components/FomButton";
import FormFields from "../components/FormFields";
import SelectModule from "../components/SelectModule";
const Roles = (Title) => {
  const [Role, setRole] = useState("");
  const [ShowModuleTable, setShowModuleTable] = useState(false);
  const [RolesList, setRolesList] = useState([]);
  const [SelectedRoleIndex, setSelectedRoleIndex] = useState(null);
  const [ModuleData, setModuleData] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const EnterRole = (e) => {
    setRole(e.target.value);
  };
  const handleAddRole = () => {
    if (SelectedRoleIndex !== null) {
      // Editing existing role
      const updatedRoles = [...RolesList];
      updatedRoles[SelectedRoleIndex] = Role;
      setRolesList(updatedRoles);
      setRole("");
      setSelectedRoleIndex(null);
    } else {
      // Adding new role
      if (Role.trim() !== "") {
        setRolesList((prevRoles) => [...prevRoles, Role]);
        setModuleData((prevModuleData) => [...prevModuleData, []]); // Initialize module data for the new role
        setRole("");
      }
    }
  };

  const handleEditRole = (index) => {
    setRole(RolesList[index]);
    setSelectedRoleIndex(index);
  };
  const handleModuleButtonClick = (index) => {
    setShowModuleTable(true);
  };

  const handleBackButtonClick = () => {
    setShowModuleTable(false);
  };

  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-lg w-2/6 "
      >
        {ShowModuleTable ? (
          // Display Module Table
          <div>
            <PageHeading Title="Modules" />
            <Divider />
            <SelectModule />
            <FormButton Title="back" onClick={handleBackButtonClick} />
          </div>
        ) : (
          // Display Roles Form
          <div>
            <PageHeading Title="Roles" />
            <Divider />
            <FormFields
              onChange={EnterRole}
              name="userRole"
              value={Role}
              placeholder="Enter role"
              required={true}
            />
            <FormButton
              onClick={handleAddRole}
              Title={SelectedRoleIndex !== null ? "UPDATE " : "ADD"}
            />
            <div>
              <table className="border-collapse border  border-slate-400 w-full mt-5 text-center">
                <thead>
                  <tr className="bg-gray-300">
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Module</th>
                  </tr>
                </thead>
                <tbody>
                  {RolesList.map((r, index) => (
                    <tr key={index}>
                      <td className="border border-slate-300">{r}</td>
                      <td className="border border-slate-300">
                        <button onClick={() => handleEditRole(index)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="text-orange-500 hover:text-orange-600 bi bi-pencil-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                          </svg>
                        </button>
                      </td>
                      <td>
                        <button
                          className="bg-orange-400 px-2 rounded-md hover:bg-orange-600 transition-all duration-300 my-1 text-white"
                          onClick={() => handleModuleButtonClick(index)}
                        >
                          M
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roles;
