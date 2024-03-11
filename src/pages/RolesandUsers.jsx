import React, { useState,useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
const RolesandUsers = () => {
    const [Role, setRole] = useState("");
    const [showUserForm, setShowUserForm] = useState(false);
    const [showModuleTable, setShowModuleTable] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [rolesList, setRolesList] = useState([]);
    const [selectedRoleIndex, setSelectedRoleIndex] = useState(null);
    const [selectedUserRole, setSelectedUserRole] = useState("");
    const [moduleData, setModuleData] = useState([]);

    useEffect(() => {
        Aos.init({duration:2000});
      })

    const EnterRole = (e) => {
        setRole(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleAddRole = () => {
        if (selectedRoleIndex !== null) {
            // Editing existing role
            const updatedRoles = [...rolesList];
            updatedRoles[selectedRoleIndex] = Role;
            setRolesList(updatedRoles);
            setRole("");
            setSelectedRoleIndex(null);
        } else {
            // Adding new role
            if (Role.trim() !== "") {
                setRolesList((prevRoles) => [...prevRoles, Role]);
                setModuleData((prevModuleData) => [...prevModuleData, []]); // Initialize module data for the new role
                setRole("");
                setUsername("");
                setEmail("");
            }
        }
    }

    const handleEditRole = (index) => {
        setRole(rolesList[index]);
        setSelectedRoleIndex(index);
    }

    const handleUserButtonClick = (selectedRole) => {
        setSelectedUserRole(selectedRole);
        setShowUserForm(true);
    }

    const handleModuleButtonClick = (index) => {
        setShowUserForm(false);
        setSelectedUserRole(rolesList[index]);
        setShowModuleTable(true);
    }

    const handleBackButtonClick = () => {
        setShowUserForm(false);
        setShowModuleTable(false);
    }

    return (
        <div className="pt-20 min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
            <div data-aos="fade-down" className="bg-white p-8 rounded-md shadow-lg w-2/6 ">
                {showUserForm ? (
                    // Display User Form
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold mb-4 text-center"> User: {selectedUserRole}</h1>
                        <div className="w-1/2 mx-auto mb-6">
                            <div className="border-b-2 border-orange-500 rounded-md mx-auto"></div>
                        </div>
                        <div className="relative w-full">
                            <input value={username} onChange={handleUsernameChange} id="userName" type="text" placeholder="" required className="text-black peer placeholder-transparent bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"/>
                            <label className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all" htmlFor="userName" name="userName">
                            Username...
                            </label>
                        </div>
                        <div className="relative mt-4 w-full">
                            <input value={email} onChange={handleEmailChange} id="email" type="email" placeholder="" required className="text-black peer placeholder-transparent bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"/>
                            <label className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all" htmlFor="email" name="email">
                            Enter Your Email
                            </label>
                        </div>
                        <button onClick={handleBackButtonClick} className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold roboto-mono w-full mt-2">
                            BACK
                        </button>
                    </div>
                ) : showModuleTable ? (
                    // Display Module Table
                    <div>
                        <h1 className="text-3xl font-bold mb-4 text-center text-orange-800">Module Table for {selectedUserRole}</h1>
                        <table className="w-full border-collapse border border-orange-400">
                            <thead>
                                <tr>
                                    <th className="border border-orange-300 bg-orange-500 text-white">Modules</th>
                                    <th className="border border-orange-300 bg-orange-500 text-white">View</th>
                                    <th className="border border-orange-300 bg-orange-500 text-white">Edit</th>
                                    <th className="border border-orange-300 bg-orange-500 text-white">Delete</th>
                                    <th className="border border-orange-300 bg-orange-500 text-white">Add</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td className="border border-orange-300 bg-orange-100">Shops</td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="view-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="edit-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="delete-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="add-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-orange-300 bg-orange-100">Users</td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="view-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="edit-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="delete-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="add-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-orange-300 bg-orange-100">Mosques</td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="view-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="edit-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                    <td className="border border-orange-300 bg-orange-100">
                                        <div className="flex items-center justify-center">
                                            <input id="delete-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                    <td className="border border-orange-300 bg-orange-100">
                                       <div className="flex items-center justify-center">
                                            <input id="add-checkbox" type="checkbox"
                                                className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600" />
                                        </div>
                                    </td>
                                </tr>
                                {/* <!-- Add more rows as needed --> */}
                            </tbody>
                        </table>
                        {/* Add your module table rendering logic here using moduleData[selectedRoleIndex] */}
                        <button onClick={handleBackButtonClick} className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold roboto-mono w-full mt-2">
                            BACK
                        </button>
                    </div>
                ) : (
                    // Display Roles Form
                    <div>
                        <h1 className="text-3xl font-bold mb-4 text-center text-orange-800">Roles</h1>
                        <div className="w-1/2 mx-auto mb-6">
                            <div className="border-b-2 border-orange-500 rounded-md mx-auto"></div>
                        </div>
                        <div className="relative mt-4 flex items-center justify-between bg-yellow-100 border-2 border-red-500 rounded-md px-1">
                            <input onChange={EnterRole} id="userRole" type="text" placeholder="" required className="text-black peer placeholder-transparent bg-yellow-100 w-auto py-2 px-3 focus:outline-none inputFeild"/>
                            <label className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-6 cursor-text transition-all" htmlFor="userRole" name="userRole">
                            Enter role
                            </label>
                            <button onClick={handleAddRole} className="border-2 border-yellow-500 bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold roboto-mono flex justify-center items-center">
                                {selectedRoleIndex !== null ? "UPDATE " : "ADD"}
                            </button>
                        </div>
                        <div>
                            <table className="border-collapse border  border-slate-400 w-full mt-5 text-center">
                                <thead>
                                    <tr className="bg-gray-300">
                                        <th>Name</th>
                                        <th>User Data</th>
                                        <th>Edit</th>
                                        <th>Module</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rolesList.map((r, index) => (
                                        <tr key={index}>
                                            <td className="border border-slate-300">{r}</td>
                                            <td className="border border-slate-300">
                                                <button onClick={() => handleUserButtonClick(r)} className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-orange-500 hover:text-orange-600 bi bi-person-fill" viewBox="0 0 16 16">
                                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                                    </svg>
                                                </button>
                                            </td>
                                            <td className="border border-slate-300">
                                                <button onClick={() => handleEditRole(index)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-orange-500 hover:text-orange-600 bi bi-pencil-fill" viewBox="0 0 16 16">
                                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                                                    </svg>
                                                </button>
                                            </td>
                                            <td>
                                                <button className="bg-orange-400 px-2 rounded-md hover:bg-orange-600 transition-all duration-300 my-1 text-white" onClick={() => handleModuleButtonClick(index)}>M</button>
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
}

export default RolesandUsers;
