import { Route, Routes } from 'react-router-dom';
import ShopRegister from '../../pages/ShopRegister/ShopRegister';


const ROUTE_LIST = [
    {
        path: '/daftar-toko',
        element: <ShopRegister/>,
    },
      
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