const Nav = () => {
    return (
        <nav className="bg-blue-500 p-4 w-full">
                <div className="container mx-auto flex items-center justify-between w-full">
                    {/* Logo  */}
                    <div className="">
                        <img src="zamedia.png" alt="Logo" className="w-48"/>
                    </div>

                    {/* Search Bar */}
                    <div className="ml-4 flex justify-around">
                        <div className="relative ">
                            <input type="text" placeholder="Search..." className="py-2 px-4 border border-gray-300 rounded-md w-96 focus:outline-none focus:border-blue-500"/>
                            <button className="absolute right-0 top-0 h-full px-3">
                                {/* Add search icon or any other icon here  */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className="h-5 w-5 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-5.2-5.2M15 9a6 6 0 100 12 6 6 0 000-12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
    );
}
export default Nav;