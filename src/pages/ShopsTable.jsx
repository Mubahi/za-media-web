import { useEffect, useState } from "react";
import ShopRow from "./components/ShopRow";

const ShopsTable = ({Shops,Brands,Categories,Areas,Countries}) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedArea, setSelectedArea] = useState('all');
    const [selectedWindows, setSelectedWindows] = useState('all');
    const [selectedCity, setSelectedCity] = useState('all');
    const [filteredShops, setFilteredShops] = useState([]);
    const [Cities, setCities] = useState([]);
    const filterCities = (country_id) => {
        const country = Countries.find((c) => c.country_id === country_id);
        setCities(country ? country.cities : []);
        setSelectedCountry(country_id);
        setSelectedCity('all'); // Reset city selection when country changes
    };
    const filterShops = () => {
        let filteredShops = Shops;
        // Filter based on selected country
        if (selectedCountry) {
            filteredShops = filteredShops.filter((shop) => shop.shop_country_id === selectedCountry);
        }
        // Filter based on selected city
        if (selectedCity !== 'all') {
            filteredShops = filteredShops.filter((shop) => shop.shop_city_id === selectedCity);
        }
        // Filter based on selected Area
        if (selectedArea !=='all') {
            filteredShops = filteredShops.filter((shop) => shop.shop_area_id === selectedArea);
        }
        // Filter based on selected Area
        if (selectedWindows !=='all') {
            filteredShops = filteredShops.filter((shop) => shop.shop_windows === selectedWindows);
        }
        setFilteredShops(filteredShops);
    };

    useEffect(() => {
        // Update filtered shops whenever a filter changes
        filterShops();
    }, [selectedCountry, selectedCity, selectedArea, selectedWindows , Shops ]);


    return (
        <div className='pt-16'>
            <div className='border-b border-orange-500 flex flex-col sm:flex-row justify-around pt-1 bg-yellow-100'>
                {/* <div className='flex flex-wrap bg-yellow-300 rounded-md py-1'> */}
                    <select  onChange={(e) => filterCities(e.target.value)} className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none " value={selectedCountry}>
                        <option value="" className="bg-white text-black">All Countries</option>
                        {Countries.map(function(country){
                            return(<option key={country.country_id} value={country.country_id} className="bg-white text-black">{country.country_name}</option>);
                        })}
                    </select>
                    <select  onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity} className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none">
                        <option value="all" className="bg-white text-black">All Cities </option>
                        {Cities.map(function(City){
                            return(<option key={City.city_id} value={City.city_id} className="bg-white text-black">{City.city_name}</option>);
                        })}
                    </select>
                    <select  className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none">
                        <option value="all" className="bg-white text-black">All Brands</option>
                        {Brands.map(function(brand){
                            return(<option key={brand.id} value={brand.id} className="bg-white text-black">{brand.name}</option>);
                        })}
                    </select>
                    <select  className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none">
                        <option value="all" className="bg-white text-black">Categories</option>
                        {Categories.map(function(Category){
                            return(<option key={Category.id} value={Category.id} className="bg-white text-black">{Category.name}</option>);
                        })}
                    </select>
                    <select  value={selectedArea}  onChange={(e) => setSelectedArea(e.target.value)} className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none">
                        <option value="all" className="bg-white text-black">All Areas</option>
                        {Areas.map(function(area){
                            return(<option key={area.id} value={area.id} className="bg-white text-black">{area.name}</option>);
                        })}
                    </select>
                    <select  value={selectedWindows} onChange={(e) => setSelectedWindows(e.target.value)} className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none">
                        <option value="all" className="bg-white text-black">Window</option>
                        <option value="1" className="bg-white text-black">1</option>
                        <option value="2" className="bg-white text-black">2 </option>
                        <option value="3" className="bg-white text-black">3 </option>
                        <option value="4" className="bg-white text-black">4 </option>
                        <option value="5" className="bg-white text-black">5 </option>
                        <option value="6" className="bg-white text-black">6 </option>
                        <option value="7" className="bg-white text-black">7 </option>
                        <option value="8" className="bg-white text-black">8 </option>
                        <option value="9" className="bg-white text-black">9 </option>
                        <option value="10" className="bg-white text-black">10 </option>
                    </select>
                {/* </div> */}
            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
                            Company Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Area
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Shop Hours
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Owner Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Owner Nationality
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Owner Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Owner Whatsapp
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Manager Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Manager Contact
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Staff Uniform Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Brands
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Categories
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Products
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Shop Website
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Shop Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Shop Social Media
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Power days Reach
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Normal Days Reach
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Windows
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredShops.map(function(shop) {
                        // Pass shop data as props to ShopRow
                        return <ShopRow key={shop.shop_id} shop={shop} Countries={Countries} Areas={Areas} />;
                    })}
                    
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default ShopsTable;