import Divider from "../../components/Divider";
import FormButton from "../../components/FomButton";
import PageHeading from "../../components/PageHeadng";

const SelectModule = ({ Modules, View }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-lg w-96 "
      >
        <PageHeading Title="Modules" />
        <Divider />

        <table className="w-full border-collapse border border-orange-400">
          <thead>
            <tr>
              <th className="border border-orange-300 bg-orange-500 text-white">
                Modules
              </th>
              <th className="border border-orange-300 bg-orange-500 text-white">
                View
              </th>
              <th className="border border-orange-300 bg-orange-500 text-white">
                Edit
              </th>
              <th className="border border-orange-300 bg-orange-500 text-white">
                Delete
              </th>
              <th className="border border-orange-300 bg-orange-500 text-white">
                Add
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {Modules.map((module) => {
              return (
                <tr>
                  <td className="border border-orange-300 bg-orange-100">
                    {module.module_name}
                  </td>
                  <td className="border border-orange-300 bg-orange-100">
                    <div className="flex items-center justify-center">
                      <input
                        id="view-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600"
                      />
                    </div>
                  </td>
                  <td className="border border-orange-300 bg-orange-100">
                    <div className="flex items-center justify-center">
                      <input
                        id="edit-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600"
                      />
                    </div>
                  </td>
                  <td className="border border-orange-300 bg-orange-100">
                    <div className="flex items-center justify-center">
                      <input
                        id="delete-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600"
                      />
                    </div>
                  </td>
                  <td className="border border-orange-300 bg-orange-100">
                    <div className="flex items-center justify-center">
                      <input
                        id="add-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <FormButton Title="back" onClick={() => View("AddNew")} />
      </div>
    </div>
  );
};
export default SelectModule;
