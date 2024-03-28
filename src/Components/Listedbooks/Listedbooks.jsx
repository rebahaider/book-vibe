import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const Listedbooks = () => {

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="space-y-6">

            <h2 className="text-3xl font-bold bg-base-200 text-center p-5 rounded-2xl">Books</h2>
            <div >
                <Link to={''} onClick={() => setTabIndex(0)} className={`px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}`}>Read Books</Link>

                <Link to={`wishList`} onClick={() => setTabIndex(1)} className={`px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}`}>Wishlist Books</Link>

            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Listedbooks;