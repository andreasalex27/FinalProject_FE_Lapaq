import { Route, Routes } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/LandingPage';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';


const ROUTE_LIST = [
    {
        path: '/welcome',
        element: <LandingPage/>,
    },
    {
        path: '/sign-in',
        element: <SignIn/>,
    },
    {
        path: '/sign-up',
        element: <SignUp/>,
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