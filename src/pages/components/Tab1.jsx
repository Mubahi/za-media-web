const Part1 = () => {
    return (
        <div class="flex-shrink-0 bg-white rounded-md shadow-md ml-4 w-48">
            <div className="bg-purple-400 p-6 rounded-t-md">
                <img src="algeriapeople.jpg" alt="Image 1" class="w-full object-cover -mb-20 rounded-lg"/>
            </div>
            <div className="p-6">
            <p class="text-lg font-semibold mb-2 mt-10">Care Mart</p>
            <p class="text-gray-500">Algeria,Blida</p>
            <div className="border-b border-blue-400 mt-2 mx-2"></div>
            <div className="mt-5">
                <button className="border-2 border-yellow-500 bg-yellow-500 text-white py-1 w-full rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold">
                    View
                </button>
            </div>
            </div>
        </div>
    );
}
export default Part1;