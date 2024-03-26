import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-4">
                        <NavLink to={"/"} className="btn">Home</NavLink>
                        <NavLink to={"/listedbooks"} className="btn">Listed Books</NavLink>
                        <NavLink to={"/pagetoread"} className="btn">Pages To Read</NavLink>

                    </ul>
                </div>
                <Link to={"/"} className="text-xl font-extrabold text-green-600">Book Vibe</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-bold' : 'btn'}>Home</NavLink>
                    <NavLink to={"/listedbooks"} className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-bold' : 'btn'}>Listed Books</NavLink>
                    <NavLink to={"/pagetoread"} className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-bold' : 'btn'}>Pages To Read</NavLink>
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