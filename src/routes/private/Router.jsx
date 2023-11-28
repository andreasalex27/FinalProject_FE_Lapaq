import { Route, Routes } from 'react-router-dom';
import EditProfileSeller from '../../pages/ProfileSeller/EditProfileSeller';
import ProfileSeller from '../../pages/ProfileSeller/ProfileSeller';
import SellerLayout from '../../layouts/SellerLayouts';

const ROUTE_LIST = [
    {
        path: '/homepage/dashboard/profile/:_id',
        element: <SellerLayout><ProfileSeller/></SellerLayout>,
    },
    {
        path: '/homepage/dashboard/profile/edit/:_id',
        element: <EditProfileSeller/>,
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