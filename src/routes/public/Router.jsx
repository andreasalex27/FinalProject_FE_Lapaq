import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/LandingPage';

const ROUTE_LIST = [
    {
        path: '/welcome',
        element: <LandingPage/>,
    }   
];

const RoutePublic = () => {
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

export default RoutePublic;