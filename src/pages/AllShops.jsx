import { useNavigate } from "react-router-dom";
const AllShops = () => {
    const navigate = useNavigate();
    function HomePage() {
      navigate('/pages/Homescreen');
    }
    return (
        <div className='pb-1'>
            <div className='bg-orange-500 flex flex-col sm:flex-row justify-between p-3'>
                <div className="mb-2 sm:mb-0">
                    <h1 className='text-white text-3xl'>All Shopes</h1>
                </div>
                <div className="mb-4 md:mb-0">
                    <button className="border-2 border-red-500 animate-bounce bg-red-500 text-white py-1 px-2 w-full md:w-auto rounded-md hover:bg-orange-500 hover:text-white hover:border-white transition duration-300 font-semibold outline-none hover:border-2" onClick={HomePage}>
                        Homepage
                    </button>
                </div>
                <div className='flex flex-wrap'>
                    <select id="country_name" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                            <option value="" className="bg-white text-black">countries</option>
                            <option value="" className="bg-white text-black">Germany</option>
                            <option value="" className="bg-white text-black">Italy </option>
                    </select>
                    <select id="cityName" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                            <option value="" className="bg-white text-black">Cities</option>
                            <option value="" className="bg-white text-black">rabwah</option>
                            <option value="" className="bg-white text-black">chanai</option>
                    </select>
                    <select id="brandName" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                            <option value="" className="bg-white text-black">Brand</option>
                            <option value="" className="bg-white text-black">BMW</option>
                            <option value="" className="bg-white text-black">OPPO</option>
                    </select>
                    <select id="country_name" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                            <option value="" className="bg-white text-black">Categories</option>
                            <option value="" className="bg-white text-black">Germany</option>
                            <option value="" className="bg-white text-black">Italy </option>
                    </select>
                    <select id="country_name" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                            <option value="" className="bg-white text-black">Areas</option>
                            <option value="" className="bg-white text-black">Punjab</option>
                            <option value="" className="bg-white text-black">Italy</option>
                    </select>
                    <select id="country_name" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                            <option value="" className="bg-white text-black">Window</option>
                            <option value="" className="bg-white text-black">Germany</option>
                            <option value="" className="bg-white text-black">Italy </option>
                    </select>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-center text-xs text-gray-700 uppercase bg-orange-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Shop Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Country
                        </th>
                        <th scope="col" className="px-6 py-3">
                            City
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Brand
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Area
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Window
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-600 text-center">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple
                    </th>
                    <td className="px-6 py-4">
                        America
                    </td>
                    <td className="px-6 py-4">
                        Washington
                    </td>
                    <td className="px-6 py-4">
                        Mongo
                    </td>
                    <td className="px-6 py-4">
                        Wedding
                    </td>
                    <td className="px-6 py-4">
                        Washington
                    </td>
                    <td className="px-6 py-4">
                        1
                    </td>
                    <td className="flex items-center px-6 py-4 justify-center">
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                        <button className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                    </td>
                </tr>
                    {/* <TableRowTwo/> */}
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default AllShops;