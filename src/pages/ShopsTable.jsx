import { useState } from "react";

const ShopsTable = ({Shops,Brands,Categories,Areas,Countries}) => {
    const [Cities, setCities] = useState([]);
    const filterCities=(country_id)=>{
        const country = Countries.find((c) => c.country_id = country_id);
        setCities(country.cities);
    };
    return (
        <div className='pb-1'>
            <div className='bg-orange-500 flex flex-col sm:flex-row justify-between p-3'>
                <div className="mb-2 sm:mb-0">
                    <h1 className='text-white text-3xl'>All Shopes</h1>
                </div>
                <div className="mb-4 md:mb-0">
                    <button className="border-2 border-red-500 animate-bounce bg-red-500 text-white py-1 px-2 w-full md:w-auto rounded-md hover:bg-orange-500 hover:text-white hover:border-white transition duration-300 font-semibold outline-none hover:border-2">
                        Homepage
                    </button>
                </div>
                <div className='flex flex-wrap'>
                    <select id="country_name" onChange={(e) => filterCities(e.target.value)} className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                        {Countries.map(function(country){
                            return(<option key={country.country_id} value={country.country_id} className="bg-white text-black">{country.country_name}</option>);
                        })}
                    </select>
                    <select id="cityName" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                            <option value="" className="bg-white text-black">Cities</option>
                            {Cities.map(function(City){
                                return(<option key={City.city_id} value={City.city_id} className="bg-white text-black">{City.city_name}</option>);
                            })}
                    </select>
                    <select id="brandName" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                        {Brands.map(function(brand){
                            return(<option key={brand.id} value={brand.id} className="bg-white text-black">{brand.name}</option>);
                        })}
                    </select>
                    <select id="country_name" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                            <option value="" className="bg-white text-black">Categories</option>
                            {Categories.map(function(Category){
                                return(<option key={Category.id} value={Category.id} className="bg-white text-black">{Category.name}</option>);
                            })}
                    </select>
                    <select id="area" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                        <option value="">Areas</option>
                        {Areas.map(function(area){
                            return(<option key={area.id} value={area.id} className="bg-white text-black">{area.name}</option>);
                        })}
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
                            Windows
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
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                            </svg>
                        </button>
                        <div className="ml-2">|</div>
                        <button className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default ShopsTable;