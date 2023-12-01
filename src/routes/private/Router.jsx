import { Route, Routes } from 'react-router-dom';
import ProductList from '../../pages/ProductList/ProductList'
import SellerLayout from '../../layouts/SellerLayout';

const ROUTE_LIST = [
     {
        path: '/homepage/dashboard/produk-saya',
        element: <SellerLayout><ProductList/></SellerLayout>,
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
