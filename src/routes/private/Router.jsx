import {Route, Routes} from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import ShopRegister from '../../pages/ShopRegister/ShopRegister';
import BuyerLayout from '../../layouts/BuyerLayout';

const ROUTE_LIST = [
    {
        path: '/homepage',
        element: <BuyerLayout><Homepage/></BuyerLayout>,
    },
    {
        path: '/daftar-toko',
        element: <ShopRegister />,
    }    
];

const AppRouter = () => {
    return (
        <Routes>
            {ROUTE_LIST.map((route, index) => (
                <Route
                    key={`route-${index}`}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;