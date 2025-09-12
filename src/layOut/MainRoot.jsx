import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const MainRoot = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainRoot;