import { Route, Routes } from 'react-router-dom';
import TransactionOrder from '../../pages/TransactionOrder/TransactionOrder';
import TransactionReturn from '../../pages/TransactionReturn/TransactionReturn';
import TransactionReview from '../../pages/TransactionReview/TransactionReview';
import BuyerLayout from '../../layouts/BuyerLayout';

const ROUTE_LIST = [
    {
        path: '/homepage/transaksi',
        element: <BuyerLayout><TransactionOrder/></BuyerLayout>,
    },
    {
        path: '/homepage/transaksi/return',
        element: <TransactionReturn/>,
    },
    {
        path: '/homepage/transaksi/review',
        element: <TransactionReview/>,
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