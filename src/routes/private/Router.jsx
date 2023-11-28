import {Route, Routes} from 'react-router-dom';
import BuyerLayout from '../../layouts/BuyerLayout';
import CatalogProduct from '../../pages/CatalogProduct/CatalogProduct';
import Checkout from '../../pages/Checkout/Checkout';

const ROUTE_LIST = [
    {
        path: '/homepage/search/produk/:_id',
        element: <BuyerLayout><CatalogProduct/></BuyerLayout>,
    }, 
    {
        path: '/homepage/search/produk/checkout/:_id',
        element: <Checkout/>,
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