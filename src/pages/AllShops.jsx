import { useEffect, useState } from "react";
import ShopRow from "./components/ShopRow";

const AllShops = ({Shops,Brands,Categories,Areas,Countries}) => {
    const [SelectedCountry, setSelectedCountry] = useState('');
    const [SelectedArea, setSelectedArea] = useState('all');
    const [SelectedWindows, setSelectedWindows] = useState('all');
    const [SelectedCity, setSelectedCity] = useState('all');
    const [FilteredShops, setFilteredShops] = useState([]);
    const [Cities, setCities] = useState([]);
    const filterCities = (country_id) => {
        const country = Countries.find((c) => c.country_id === country_id);
        setCities(country ? country.cities : []);
        setSelectedCountry(country_id);
        setSelectedCity('all'); // Reset city selection when country changes
    };
    const filterShops = () => {
        let FilteredShops = Shops;
        // Filter based on Selected country
        if (SelectedCountry) {
            FilteredShops = FilteredShops.filter((shop) => shop.shop_country_id === SelectedCountry);
        }
        // Filter based on Selected city
        if (SelectedCity !== 'all') {
            FilteredShops = FilteredShops.filter((shop) => shop.shop_city_id === SelectedCity);
        }
        // Filter based on Selected Area
        if (SelectedArea !=='all') {
            FilteredShops = FilteredShops.filter((shop) => shop.shop_area_id === SelectedArea);
        }
        // Filter based on Selected Area
        if (SelectedWindows !=='all') {
            FilteredShops = FilteredShops.filter((shop) => shop.shop_windows === SelectedWindows);
        }
        setFilteredShops(FilteredShops);
    };

    useEffect(() => {
        // Update Filtered shops whenever a filter changes
        filterShops();
    }, [SelectedCountry, SelectedCity, SelectedArea, SelectedWindows , Shops ]);


    return (
        <div className='pt-16 bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300'>
            <div className='border-b fixed w-full border-orange-500 flex flex-col sm:flex-row justify-around pt-1 bg-yellow-100'>
                {/* <div className='flex flex-wrap bg-yellow-300 rounded-md py-1'> */}
                    <select  onChange={(e) => filterCities(e.target.value)} className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none " value={SelectedCountry}>
                        <option value="" className="bg-white text-black">All Countries</option>
                        {Countries.map(function(country){
                            return(<option key={country.country_id} value={country.country_id} className="bg-white text-black">{country.country_name}</option>);
                        })}
                    </select>
                    <select  onChange={(e) => setSelectedCity(e.target.value)} value={SelectedCity} className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none">
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
                    <select  value={SelectedArea}  onChange={(e) => setSelectedArea(e.target.value)} className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none">
                        <option value="all" className="bg-white text-black">All Areas</option>
                        {Areas.map(function(area){
                            return(<option key={area.id} value={area.id} className="bg-white text-black">{area.name}</option>);
                        })}
                    </select>
                    <select  value={SelectedWindows} onChange={(e) => setSelectedWindows(e.target.value)} className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none">
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
            <div className="overflow-x-auto shadow-md min-h-screen pt-8">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-center text-xs text-gray-700 uppercase bg-orange-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th key="ShopName" scope="col" className="px-6 py-3">
                            Shop Name
                            </th>
                            <th key="Country" scope="col" className="px-6 py-3">
                                Country
                            </th>
                            <th key="City" scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th key="CompanyName" scope="col" className="px-6 py-3">
                                Company Name
                            </th>
                            <th key="Address" scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th key="Area" scope="col" className="px-6 py-3">
                                Area
                            </th>
                            <th key="ShopHours" scope="col" className="px-6 py-3">
                                Shop Hours
                            </th>
                            <th key="OwnerName" scope="col" className="px-6 py-3">
                                Owner Name
                            </th>
                            <th key="OwnerNationality" scope="col" className="px-6 py-3">
                                Owner Nationality
                            </th>
                            <th key="OwnerPhone" scope="col" className="px-6 py-3">
                                Owner Phone
                            </th>
                            <th key="OwnerWhatsapp" scope="col" className="px-6 py-3">
                                Owner Whatsapp
                            </th>
                            <th key="ManagerName" scope="col" className="px-6 py-3">
                                Manager Name
                            </th>
                            <th key="ManagerContact" scope="col" className="px-6 py-3">
                                Manager Contact
                            </th>
                            <th key="StaffUniformColor" scope="col" className="px-6 py-3">
                                Staff Uniform Color
                            </th>
                            <th key="Brands" scope="col" className="px-6 py-3">
                                Brands
                            </th>
                            <th key="Categories" scope="col" className="px-6 py-3">
                                Categories
                            </th>
                            <th key="Products" scope="col" className="px-6 py-3">
                                Products
                            </th>
                            <th key="ShopWebsite" scope="col" className="px-6 py-3">
                                Shop Website
                            </th>
                            <th key="ShopEmail" scope="col" className="px-6 py-3">
                                Shop Email
                            </th>
                            <th key="ShopSocialMedia" scope="col" className="px-6 py-3">
                                Shop Social Media
                            </th>
                            <th key="PowerdaysReach" scope="col" className="px-6 py-3">
                                Power days Reach
                            </th>
                            <th key="NormalDaysReach" scope="col" className="px-6 py-3">
                                Normal Days Reach
                            </th>
                            <th key="Windows" scope="col" className="px-6 py-3">
                                Windows
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {FilteredShops.map(function(shop) {
                            // Pass shop data as props to ShopRow
                            return <ShopRow key={shop.shop_id} shop={shop} Countries={Countries} Areas={Areas} />;
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AllShops;