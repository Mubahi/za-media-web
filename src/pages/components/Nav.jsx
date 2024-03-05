
const Nav = ({onDetailedView}) => {
    return (
        <header className="bg-gradient-to-r from-gray-400 to-gray-600 p-2 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <img src="/zamedia.png" alt="za-media-Logo" className="w-48"/>
                </div>
                <div className="flex items-center">
                    <button className="border border-orange-500 bg-orange-500 text-white py-1 px-2 w-full md:w-auto rounded-md hover:bg-orange-500 transition duration-300 font-semibold outline-none ml-4">
                        Home
                    </button>
                    <div className="mb-4 md:mb-0 ml-2">
                        <p onClick={onDetailedView} className="text-white cursor-pointer hover:font-bold transition-all duration-300">All Shops</p>
                    </div>
                </div>
                <div className="mb-4 md:mb-0">
                    <button className="border-2 border-red-500 bg-red-500 text-white py-1 px-2 w-full md:w-auto rounded-md hover:bg-red-700 hover:text-white hover:border-red-700 transition duration-300 font-semibold outline-none ml-2">
                        Log out
                    </button>
                </div>
            </div>
        </header>

    );
}
export default Nav;