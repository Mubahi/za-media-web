import PageHeading from "../../components/PageHeadng";
import FormField from "../../components/FormField";
import Divider from "../../components/Divider";
import FormButton from "../../components/FomButton";
const AddNew = ({ Roles, View }) => {
  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-lg w-96 "
      >
        <div>
          <PageHeading Title="Roles" />
          <Divider />
          <FormField name="userRole" placeholder="Enter role" />
          <FormButton Title={"submit"} />
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
                {Roles.map((role, index) => (
                  <tr key={index}>
                    <td className="border border-slate-300">
                      {role.role_name}
                    </td>
                    <td className="border border-slate-300">
                      <button>
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
                        onClick={() => View("SelectModule")}
                        className="bg-orange-400 px-2 rounded-md hover:bg-orange-600 transition-all duration-300 my-1 text-white"
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
      </div>
    </div>
  );
};

export default AddNew;
