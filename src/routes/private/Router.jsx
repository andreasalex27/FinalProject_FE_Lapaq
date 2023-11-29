import {Route, Routes} from 'react-router-dom';
import ProfileBuyer from '../../pages/ProfileBuyer/ProfileBuyer';
import EditProfileBuyer from '../../pages/EditProfileBuyer/EditProfileBuyer';

const ROUTE_LIST = [
    {
        path: '/homepage/dashboard/profile/:_id',
        element: <ProfileBuyer/>,
    },
    {
        path: '/homepage/dashboard/profile/edit/:_id',
        element: <EditProfileBuyer />,
    }
      
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
