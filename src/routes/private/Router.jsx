import { Route, Routes } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';


const ROUTE_LIST = [
    {
        path: '/homepage',
        element: <Homepage/>,
    },
      
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