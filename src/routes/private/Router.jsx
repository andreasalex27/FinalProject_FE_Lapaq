import React from 'react';
import {Route, Routes} from 'react-router-dom';
import OrderCancel from '../../pages/OrderCancel/OrderCancel';
import OrderHistoryLayout from '../../layouts/OrderHistoryLayout';
import OrderCancelSuccess from '../../pages/OrderCancelSuccess/OrderCancelSuccess';

const ROUTE_LIST = [
    {
        path: '/homepage/dashboard/riwayat/pembatalan',
        element: <OrderHistoryLayout><OrderCancel/></OrderHistoryLayout>,
    },
    {
        path: '/homepage/dashboard/riwayat/pembatalan/selesai/:_id',
        element: <OrderCancelSuccess/>,
    },        
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
