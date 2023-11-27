import { Route, Routes } from 'react-router-dom';
import AddProduct from '../../pages/AddProduct/AddProduct';
import ProductList from '../../pages/ProductList/ProductList';


const ROUTE_LIST = [
    {
        path: '/homepage/dashboard/produk-saya',
        element: <ProductList/>,
    },
    {
        path: '/homepage/dashboard/produk-saya/tambah-produk',
        element: <AddProduct/>,
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