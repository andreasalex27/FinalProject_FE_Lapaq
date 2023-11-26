import {Route, Routes} from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';



const ROUTE_LIST = [
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/product-new',
        element: <SignIn />,
    },
    {
        path: '/products',
        element: <ProductListPage/>,
    },
    {
        path: '/products/:productId',
        element: <ProductDetailPage/>,
    },
    {
        path: '/redux-product-new',
        element: <ProductReduxCreatePage/>,
    },
    {
        path: '/redux-products',
        element: <ProductReduxListPage/>,
    },
    {
        path: '/redux-products/:productId',
        element: <ProductReduxDetailPage/>,
    },
];

const AppRouter = () => {
    return (
        <Routes>
            {ROUTE_LIST.map((route, index) => (
                <Route
                    key={`route-${index}`}
                    path={route.path}
                    element={<DashboardLayout>{route.element}</DashboardLayout>}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
