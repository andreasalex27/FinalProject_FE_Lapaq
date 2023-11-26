import {Route, Routes} from 'react-router-dom';
import LandingLayout from '../layouts/LandingLayout.jsx';
import LandingPage from '../pages/LandingPage/LandingPage.jsx';
import SignIn from '../pages/SignIn/SignIn.jsx';
import SignUp from '../pages/SignUp/SignUp.jsx'



const ROUTE_LIST = [
    {
        path: '/',
        element: <LandingLayout><LandingPage/></LandingLayout>,
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
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
