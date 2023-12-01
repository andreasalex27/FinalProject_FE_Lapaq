import {Route, Routes} from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import BuyerLayout from '../../layouts/BuyerLayout';

const ROUTE_LIST = [
    {
        path: '/homepage',
        element: <BuyerLayout><Homepage/></BuyerLayout>,
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