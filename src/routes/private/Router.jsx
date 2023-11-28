import {Route, Routes} from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage';

const ROUTE_LIST = [
    {
        path: '/homepage/search',
        element: <SearchPage/>,
    },   
];

const routePrivate = () => {
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

export default routePrivate;