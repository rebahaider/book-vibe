
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-4 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <a className="text-xl font-extrabold text-green-600">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Listed Books</a></li>
                    <li><a>Pages to Read</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="bg-green-600 text-white px-7 py-4 rounded-2xl font-bold">Sign in </button>
                <button className="bg-blue-400 text-white px-7 py-4 rounded-2xl font-bold">Sign up </button>
            </div>
        </div>
    );
};

export default Navbar;