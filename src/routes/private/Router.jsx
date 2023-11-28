import { Route, Routes } from 'react-router-dom';
import CatalogProduct from '../../pages/CatalogProduct/CatalogProduct';
import SearchPage from '../../pages/SearchPage/SearchPage';
import BuyerLayout from '../../layouts/BuyerLayout';

const ROUTE_LIST = [
    {
        path: '/homepage/search',
        element: <SearchPage/>,
    },
       
    {
        path: '/homepage/search/produk/:_id',
        element: <BuyerLayout><CatalogProduct/></BuyerLayout>,
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