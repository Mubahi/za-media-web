
const ShopCard = ({shop, Countries, ViewShop}) => {
    const {shop_city_id,shop_country_id,shop_name} = shop;
    const GetCountryAndCity = (country_id,city_id) => {
        const country = Countries.find((c) => c.country_id === country_id);
        const city = country.cities.find((c) => c.city_id === city_id);
        return (country.country_name + "," + city.city_name);
      };
    return (
        <div className="flex-shrink-0 bg-white rounded-md shadow-md ml-4 w-48 mt-4 hover:border-2 hover:transition-all hover:duration-100 hover:opacity-75">
            <div className="bg-gray-400 p-6 rounded-t-md">
                <img src="/algeriapeople.jpg" alt="l" className="w-full object-cover -mb-20 rounded-full"/>
            </div>
            <div className="p-6">
            <p className="text-lg font-semibold mb-2 mt-10 roboto-mono">{shop_name}</p>
            <p className="text-gray-500 roboto-mono">{GetCountryAndCity(shop_country_id,shop_city_id)}</p>
            <div className="border-b border-blue-400 mt-2 mx-2"></div>
            <div className="mt-5">
                <button onClick={() => ViewShop(shop)} className="border-2 border-orange-400 bg-orange-400 text-white py-1 w-full rounded-md hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300 font-semibold font-sans">
                    View
                </button>
            </div>
            </div>
        </div>
    );
}
export default ShopCard;