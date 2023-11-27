import { Route, Routes } from 'react-router-dom';
import AddProduct from '../../AddProduct/AddProduct';
import ProductList from '../../ProductList/ProductList';


const ROUTE_LIST = [
    {
        path: '/produk-saya',
        element: <ProductList/>,
    },
    {
        path: '/produk-saya/tambah-produk',
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