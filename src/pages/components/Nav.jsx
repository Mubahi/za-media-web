const Nav = () => {
    return (
        <nav className="bg-gray-400 p-4 w-full">
                <div className="container mx-auto flex items-center justify-between w-full">
                    {/* Logo  */}
                    <div className="">
                        <img src="/zamedia.png" alt="za-media-Logo" className="w-48"/>
                    </div>

                    {/* Search Bar */}
                    <div className="ml-4 flex justify-around">
                        <div className="relative roboto-slab">
                            <input type="text" placeholder="Search..." className="py-2 px-4 border border-gray-300 rounded-md w-96 focus:outline-none focus:border-orange-500 placeholder-orange-500"/>
                            <button className="absolute right-0 top-0 h-full px-3 bg-orange-400 rounded-r-md">
                                {/* Add search icon or any other icon here  */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search text-white" viewBox="0 0 16 16">
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