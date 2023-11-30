import React from 'react';
import {Route, Routes} from 'react-router-dom';
import OrderReturn from '../../pages/OrderReturn/OrderReturn';
import OrderHistoryLayout from '../../layouts/OrderHistoryLayout';
import OrderReturnSuccess from '../../pages/OrderReturnSuccess/OrderReturnSuccess';

const ROUTE_LIST = [
    {
        path: '/homepage/dashboard/riwayat/pengembalian',
        element: <OrderHistoryLayout><OrderReturn/></OrderHistoryLayout>,
    },
    {
        path: '/homepage/dashboard/riwayat/pengembalian/selesai/:_id',
        element: <OrderReturnSuccess/>,
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
