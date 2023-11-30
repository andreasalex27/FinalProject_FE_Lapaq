import { Route, Routes } from 'react-router-dom';
import OrderHistory from '../../pages/OrderHistory/OrderHistory';
import BuyerLayout from '../../layouts/BuyerLayout';

const ROUTE_LIST = [
    {
        path: '/homepage/riwayat',
        element: <BuyerLayout><OrderHistory/></BuyerLayout>,
    }
];

const RoutePrivate = () => {
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

export default RoutePrivate;