const SelectModule = () => {
  return (
    <>
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
          <tr>
            <td className="border border-orange-300 bg-orange-100">Shops</td>
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
          <tr>
            <td className="border border-orange-300 bg-orange-100">Users</td>
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
          <tr>
            <td className="border border-orange-300 bg-orange-100">Mosques</td>
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
        </tbody>
      </table>
    </>
  );
};
export default SelectModule;
