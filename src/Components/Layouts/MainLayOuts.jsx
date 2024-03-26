import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOuts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='h-20'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOuts;