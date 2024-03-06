import React from "react";
const ShopData = ({shop, Countries , Areas}) => {
    const shop_brands = shop.shop_brands || [];
    const shop_categories = shop.shop_categories || [];
    const shop_products = shop.shop_products || [];
    const shop_windows = shop.shop_windows || [];
    const country = Countries.find((c) => c.country_id === shop.shop_country_id);
    const GetCityName = (city_id) => {
        const city = country.cities.find((c) => c.city_id === city_id);
        return city.city_name;
    };
    const GetAreaName = (area_id) =>{
        const area = Areas.find((a) => a.id === area_id);
        return area ? area.name : '';
    };
    return (
        <div className="flex justify-center min-h-screen bg-orange-100 pt-16">
            <div className="container p-6 text-center ">
                <div className="min-h-screen flex items-start justify-center">
                    <div className="bg-white p-6 rounded-lg w-full shadow-md flex border-t-4 border-orange-500">
                        {/* <!-- Table --> */}
                        <table className="w-full">
                            {/* <!-- First Column --> */}
                            <colgroup>
                                <col className="w-1/3 pr-4 border-r-2 border-orange-500"/>
                            </colgroup>
                            <colgroup>
                                <col className="w-2/2 pl-4"/>
                            </colgroup>

                            {/* <!-- Table Body --> */}
                            <tbody>
                                <tr>
                                    <th className="font-bold flex justify-start text-orange-600 border-b  border-orange-500 pb-2">SHOP NAME</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_name}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">COUNTRY</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{country.country_name}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">CITY</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{GetCityName(shop.shop_city_id)}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">COMPANY NAME</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_company_name}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">ADDRESS</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_address}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">AREA</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{GetAreaName(shop.shop_area_id)}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">SHOP HOURS</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_opening_hours ? shop.shop_opening_hours+ ' to ' + shop.shop_closing_hours : ''  } </th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">OWNER NAME</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_owner_name}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">OWNER NATIONALITY</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_owner_nationality}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">OWNER PHONE</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_owner_phone}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">OWNER WHATSAPP</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_owner_whatsapp}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">MANAGER NAME</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_manager_name}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">MANAGER CONTACT</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_manager_contact}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">STAFF UNIFORM COLOR</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_staff_uniform_color}</th>
                                </tr>
                                <tr className="border-b border-orange-500 pb-2">
                                    <th className="font-bold text-orange-600 flex justify-start ">BRANDS</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        <table className="table-auto w-full">
                                            <thead>
                                                <tr>
                                                    <th className="bg-orange-200 w-1/4 px-2">Name</th>
                                                    <th className="bg-orange-200 w-1/4 px-2">Total Products</th>
                                                    <th className="bg-orange-200 w-1/4 px-2">Out of Stock Products</th>
                                                    <th className="bg-orange-200 w-1/4 px-2">Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {shop_brands.map(function(brand){
                                                    return (
                                                        <tr>
                                                            <th className="border border-gray-300 text-center px-2 text-orange-600 w-1/4">{brand.name}</th>
                                                            <th className="border w-1/4 border-gray-300 text-center px-2">{brand.total_products}</th>
                                                            <th className="border w-1/4 border-gray-300 text-center px-2">{brand.out_of_stock}</th>
                                                            <th className="border w-1/4 border-gray-300 text-center px-2">

                                                            </th>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </th>
                                </tr>
                                <tr className="border-b border-orange-500">
                                    <th className="font-bold text-orange-600 flex justify-start pb-2">PRODUCTS</th>
                                    <th className="text-orange-600 text-start border-b border-orange-500 pb-2">
                                       <table className="table-auto w-full">
                                            <thead>
                                            <tr>
                                                <th className="bg-orange-200 px-2 w-1/4">Name</th>
                                                <th className="bg-orange-200 px-2 w-1/4">Weight</th>
                                                <th className="bg-orange-200 px-2 w-1/4">Price</th>
                                                <th className="bg-orange-200 px-2 w-1/4">Ratings</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {shop_products.map(function(product){
                                                    return (
                                                        <tr>
                                                            <th className="border border-gray-300 text-center px-2 text-orange-600 w-1/4">{product.name}</th>
                                                            <th className="border w-1/4 border-gray-300 text-center px-2">{product.product_weight} {product.weight_unit}</th>
                                                            <th className="border w-1/4 border-gray-300 text-center px-2">{product.product_price} €</th>
                                                            <th className="border w-1/4 border-gray-300 text-center px-2">

                                                            </th>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </th>
                                </tr>
                                <tr className="border-b border-orange-500">
                                    <th className="font-bold text-orange-600 flex justify-start pb-2">CATEGORIES</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        <table className="table-auto w-full">
                                            <thead>
                                            <tr>
                                                <th className="bg-orange-200 px-2 w-1/3">Name</th>
                                                <th className="bg-orange-200 px-2  w-1/3">Total Products</th>
                                                <th className="bg-orange-200 px-2  w-1/3">Out of Stock Products</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {shop_categories.map(function(category){
                                                    return (
                                                        <tr>
                                                            <th className="border border-gray-300 text-center px-2 text-orange-600 w-1/3">{category.name}</th>
                                                            <th className="border w-1/3 border-gray-300 text-center px-2">{category.total_products}</th>
                                                            <th className="border w-1/3 border-gray-300 text-center px-2">{category.out_of_stock}</th>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">SHOP WEBSITE</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_website_url}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">SHOP EMAIL</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_email}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">SHOP SOCIAL MEDIA</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_social_media}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">POWER DAYS REACH</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_power_days_reach}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">NORMAL DAYS REACH</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop.shop_normal_days_reach}</th>
                                </tr>
                                <tr>
                                    <th className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">WINDOWS</th>
                                    <th className="text-orange-600 border-b text-start border-orange-500 pb-2 pl-5">{shop_windows.length}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShopData;