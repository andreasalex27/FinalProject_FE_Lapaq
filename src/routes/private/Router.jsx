import {Route, Routes} from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import SellerLayout from '../../layouts/SellerLyout/SellerLayout';

const ROUTE_LIST = [
    {
        path: '/homepage/dashboard',
        element: <SellerLayout><Dashboard/></SellerLayout>,
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