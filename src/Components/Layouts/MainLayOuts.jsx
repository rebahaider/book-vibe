import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOuts = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-8'>
            <div className=''>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOuts;