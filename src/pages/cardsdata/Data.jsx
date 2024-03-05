import React, { useState } from "react";
import RatingComponent from '@cogent-labs/react-rating-component'
const Data = ({GotoHome}) => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    const handleStarHover = (index) => {
        setRating(index + 1);
    };

    const handleStarMouseLeave = () => {
        setRating(0);
    };
    return (
        <div className="flex justify-center min-h-screen bg-orange-100">
            <div className="container p-6 text-center ">
                <div className="flex justify-start">
                <button onClick={GotoHome} className="border-2 border-orange-500 bg-orange-500 text-white py-2 px-2 w-auto rounded-md hover:bg-orange-600 hover:border-white transition duration-300 font-semibold outline-none mb-4 md:mb-4 animate-bounce">
                        HomePage
                </button>
                </div>
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
                                    <td className="font-bold flex justify-start text-orange-600 border-b  border-orange-500 pb-2">Shop Name:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">Care Mart</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Country:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">Algeria</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">City:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">Blida</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Company Name:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">red</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Address:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">Address</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Area:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">red</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Shop Hours:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">23:00 to 02:00</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Owner Name:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">name</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Owner Nationality:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">nationality</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Owner Phone:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">Phone</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Owner whatsapp:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        whatsapp
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Manager Name:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        name
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">Manager Contact:</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        234523
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">STAFF UNIFORM COLOR</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        red
                                    </td>
                                </tr>
                                <tr className="border-b border-orange-500 pb-2">
                                    <td className="font-bold text-orange-600 flex justify-start ">BRANDS</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        <table class="table-auto w-full">
                                            <thead>
                                            <tr>
                                                <th class="bg-orange-200 w-1/4 px-2">Name</th>
                                                <th class="bg-orange-200 w-1/4 px-2">Total Products</th>
                                                <th class="bg-orange-200 w-1/4 px-2">Out of Dtock Products</th>
                                                <th class="bg-orange-200 w-1/4 px-2">Ratings</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td class="border border-gray-300 text-center px-2 text-orange-600 w-1/4">Shan Masala,Qarshi</td>
                                                <td class="border w-1/4 border-gray-300 text-center px-2">2</td>
                                                <td class="border w-1/4 border-gray-300 text-center px-2">0</td>
                                                <td class="border w-1/4 border-gray-300 text-center px-2">
                                                    <div className="flex items-center justify-center">
                                                        {/* {[...Array(5)].map((_, index) => (
                                                            <svg
                                                            key={index}
                                                            className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'} ms-1`}
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20"
                                                            onClick={() => handleStarClick(index)}
                                                            onMouseEnter={() => handleStarHover(index)}
                                                            onMouseLeave={handleStarMouseLeave}
                                                            >
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                            </svg>
                                                        ))} */}
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="border-b border-orange-500">
                                    <td className="font-bold text-orange-600 flex justify-start pb-2">CATEGORIES</td>
                                    <td className="text-orange-600 text-start border-b border-orange-500 pb-2">
                                       <table class="table-auto w-full">
                                            <thead>
                                            <tr>
                                                <th class="bg-orange-200 px-2 w-1/4">Name</th>
                                                <th class="bg-orange-200 px-2 w-1/4">Weight</th>
                                                <th class="bg-orange-200 px-2 w-1/4">Price</th>
                                                <th class="bg-orange-200 px-2 w-1/4">Ratings</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td class="border border-gray-300 text-center px-2 text-orange-600">toys</td>
                                                <td class="border border-gray-300 text-center px-2">500kg</td>
                                                <td class="border border-gray-300 text-center px-2">1.5 E</td>
                                                <td class="border border-gray-300 text-center px-2">
                                                    <div className="flex items-center justify-center">
                                                        {/* {[...Array(5)].map((_, index) => (
                                                            <svg
                                                            key={index}
                                                            className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'} ms-1`}
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20"
                                                            onClick={() => handleStarClick(index)}
                                                            onMouseEnter={() => handleStarHover(index)}
                                                            onMouseLeave={handleStarMouseLeave}
                                                            >
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                            </svg>
                                                        ))} */}
                                                       <RatingComponent
                                                            name="rate1"
                                                            starCount={5}
                                                            value="2"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="border-b border-orange-500">
                                    <td className="font-bold text-orange-600 flex justify-start pb-2">PRODUCTS</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        <table class="table-auto w-full">
                                            <thead>
                                            <tr>
                                                <th class="bg-orange-200 px-2 w-1/3">Name</th>
                                                <th class="bg-orange-200 px-2  w-1/3">Total Products</th>
                                                <th class="bg-orange-200 px-2  w-1/3">Out of Dtock Products</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td class="border border-gray-300 text-center px-2  w-1/3 text-orange-600">red</td>
                                                <td class="border border-gray-300 text-center px-2  w-1/3">500</td>
                                                <td class="border border-gray-300 text-center px-2  w-1/3">0</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">SHOP WEBSITE</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        sabsa
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">SHOP EMAIL</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        email
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">SHOP SOCIAL MEDIA</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        adress
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">POWER DAYS REACH</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                    reach
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">NORMAL DAYS REACH	</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        normal
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-orange-600 flex justify-start border-b  border-orange-500 pb-2">WINDOWS</td>
                                    <td className="text-orange-600 border-b text-start border-orange-500 pb-2">
                                        2
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Data;