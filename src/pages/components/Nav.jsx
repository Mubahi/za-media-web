import { useNavigate } from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate();
    function AllPages() {
      navigate('/pages/AllShops');
    }
    return (
        <nav className="bg-gray-400 p-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <img src="/zamedia.png" alt="za-media-Logo" className="w-48"/>
                </div>
                <div className="mb-4 md:mb-0">
                    <button className="border-2 border-yellow-500 bg-yellow-500 text-white py-2 px-2 w-full md:w-auto rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 font-semibold outline-none animate-bounce" onClick={AllPages}>
                        All Shops
                    </button>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="relative roboto-slab mb-4 md:mb-0 md:mr-4">
                        <input type="text" placeholder="Search..." className="py-2 px-4 border border-gray-300 rounded-md w-full md:w-96 focus:outline-none focus:border-orange-500 placeholder-orange-500"/>
                        <button className="absolute right-0 top-0 h-full px-3 bg-orange-400 rounded-r-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    );
}
export default Nav;