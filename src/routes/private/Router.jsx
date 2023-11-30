import React from 'react';
import {Route, Routes} from 'react-router-dom';
import OrderReview from '../../pages/OrderReview/OrderReview';
import OrderHistoryLayout from '../../layouts/OrderHistoryLayout';
import OrderReviewDetail from '../../pages/OrderReviewDetail/OrderReviewDetail';

const ROUTE_LIST = [
    {
        path: '/homepage/dashboard/riwayat/penilaian',
        element: <OrderHistoryLayout><OrderReview/></OrderHistoryLayout>,
    },
    {
        path: '/homepage/dashboard/riwayat/penilaian/detail/:_id',
        element: <OrderReviewDetail/>,
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
