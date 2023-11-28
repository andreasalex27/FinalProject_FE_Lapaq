import {Route, Routes} from 'react-router-dom';
import BuyerLayout from '../../layouts/BuyerLayout';
import CatalogProduct from '../../pages/CatalogProduct/CatalogProduct';
import Checkout from '../../pages/Checkout/Checkout';
import SearchPage from '../../pages/SearchPage/SearchPage';
import Homepage from '../../pages/Homepage/Homepage';
import ShopRegister from '../../pages/ShopRegister/ShopRegister';

const ROUTE_LIST = [
    { 
        path: '/homepage',
        element: <BuyerLayout><Homepage/></BuyerLayout>,
    },
    {
        path: '/homepage/daftar-toko',
        element: <ShopRegister />,
    },  
    {
        path: '/homepage/search',
        element: <SearchPage/>,
    },
    {
        path: '/homepage/search/produk/:_id',
        element: <BuyerLayout><CatalogProduct/></BuyerLayout>,
    }, 
    {
        path: '/homepage/search/produk/checkout/:_id',
        element: <Checkout/>,
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