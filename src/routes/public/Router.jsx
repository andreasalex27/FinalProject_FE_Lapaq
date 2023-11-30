import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../../pages/SignIn/Signin';
import SignUp from '../../pages/SignUp/SignUp';

const ROUTE_LIST = [
    {
        path: '/welcome/sign-in',
        element: <SignIn/>,
    },
    {
        path: '/welcome/sign-up',
        element: <SignUp/>,
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