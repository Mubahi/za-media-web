import React from 'react'

export default function ShopRow({shop , Countries , Areas}) {
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
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-600 text-center">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {shop.shop_name}
        </th>
        <td className="px-6 py-4">
            {country.country_name}
        </td>
        <td className="px-6 py-4">
            {GetCityName(shop.shop_city_id)}
        </td>
        <td className="px-6 py-4">
            {shop.shop_company_name}
        </td>
        <td className="px-6 py-4">
            {shop.shop_address}
        </td>
        <td className="px-6 py-4">
            {GetAreaName(shop.shop_area_id)}
        </td>
        <td className="px-6 py-4">
            {shop.shop_opening_hours+ ' to ' + shop.shop_closing_hours || ''} 
        </td>
        <td className="px-6 py-4">
            {shop.shop_owner_name}
        </td>
        <td className="px-6 py-4">
            {shop.shop_owner_nationality}
        </td>
        <td className="px-6 py-4">
            {shop.shop_owner_phone}
        </td>
        <td className="px-6 py-4">
            {shop.shop_owner_whatsapp}
        </td>
        <td className="px-6 py-4">
            {shop.shop_manager_name}
        </td>
        <td className="px-6 py-4">
            {shop.shop_manager_contact}
        </td>
        <td className="px-6 py-4">
            {shop.shop_staff_uniform_color}
        </td>
        <td className="px-6 py-4">
            {shop_brands.map(function(brand,index){
                return index !== 0 ? ` , ${brand.name}` : brand.name;
            })}
        </td>
        <td className="px-6 py-4">
            {shop_categories.map(function(category,index){
                return index !== 0 ? ` , ${category.name}` : category.name;
            })}   
        </td>
        <td className="px-6 py-4">
            {shop_products.map(function(product,index){
                return index !== 0 ? ` , ${product.name}` : product.name;
            })}   
        </td>
        <td className="px-6 py-4">
            {shop.shop_website_url}
        </td>
        <td className="px-6 py-4">
            {shop.shop_email}
        </td>
        <td className="px-6 py-4">
            {shop.shop_social_media}
        </td>
        <td className="px-6 py-4">
            {shop.shop_power_days_reach}
        </td>
        <td className="px-6 py-4">
            {shop.shop_normal_days_reach}
        </td>
        <td className="px-6 py-4">
            {shop_windows.length}
        </td>
        {/* <td className="flex items-center px-6 py-4 justify-center">
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
        </td> */}
    </tr>
  )
}
