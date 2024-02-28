import React from "react";
const DataOne = () => {
    return (
        <div className="flex justify-center h-screen">
            <div className="container mx-auto p-6 bg-orange-100 text-center">
            <div className="mb-4 md:mb-4">
                    <button className="border-2 border-yellow-500 bg-yellow-500 text-white py-2 px-2 w-full md:w-auto rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold outline-none">
                        HomePage
                    </button>
                </div>
                <table className="w-full border border-collapse border-orange-600">
                    <thead>
                        <tr>
                            <th className="font-bold text-white bg-orange-600">1st Column</th>
                            <th className="font-bold text-white bg-orange-600">2nd Column</th>
                            <th className="font-bold text-white bg-orange-600">3rd Column</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-orange-600 text-blue-500">1</td>
                            <td className="border border-orange-600 text-blue-500">Nigeria</td>
                            <td className="border border-orange-600 text-blue-500">Bangladesh</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default DataOne;