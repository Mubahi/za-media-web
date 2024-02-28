const AllDropDown = () => {
    return (
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
                    <select id="country_name" className="text-white mx-2 w-full sm:w-28 mb-2 sm:mb-0 px-1 py-1 bg-transparent outline-none">
                            <option value="" className="bg-white text-black">Countries</option>
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
    );
}
export default AllDropDown;