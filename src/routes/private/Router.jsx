import React from 'react';
import {Route, Routes} from 'react-router-dom';
import OrderProcess from '../../pages/OrderProcess/OrderProcess';
import OrderHistoryLayout from '../../layouts/OrderHistoryLayout';
import OrderProcessSuccess from '../../pages/OrderProcessSuccess/OrderProcessSuccess';

const ROUTE_LIST = [
    {
        path: '/homepage/dashboard/riwayat/pemrosesan',
        element: <OrderHistoryLayout><OrderProcess/></OrderHistoryLayout>,
    },
    {
        path: '/homepage/dashboard/riwayat/pemrosesan/selesai/:_id',
        element: <OrderProcessSuccess/>,
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
