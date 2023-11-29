import { Route, Routes } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage';
import Homepage from '../../pages/Homepage/Homepage';
import ShopRegister from '../../pages/ShopRegister/ShopRegister';
import BuyerLayout from '../../layouts/BuyerLayout';
import EditProfileSeller from '../../pages/ProfileSeller/EditProfileSeller';
import ProfileSeller from '../../pages/ProfileSeller/ProfileSeller';
import SellerLayout from '../../layouts/SellerLayouts';
import AddProduct from '../../pages/AddProduct/AddProduct';
import ProductList from '../../pages/ProductList/ProductList';
import CatalogProduct from '../../pages/CatalogProduct/CatalogProduct';
import Checkout from '../../pages/Checkout/Checkout';

const ROUTE_LIST = [
    { 
        path: '/homepage',
        element: <BuyerLayout><Homepage/></BuyerLayout>,
    },
    {
        path: '/homepage/daftar-toko',
        element: <ShopRegister />,
    },  
    {
        path: '/homepage/search',
        element: <SearchPage/>,
    },
    {
        path: '/homepage/daftar-toko',
        element: <ShopRegister />,
    },  
    {
        path: '/homepage/dashboard/profile/:_id',
        element: <SellerLayout><ProfileSeller/></SellerLayout>,
    },
    {
        path: '/homepage/dashboard/profile/edit/:_id',
        element: <EditProfileSeller/>,
    },
    {
        path: '/homepage/dashboard/produk-saya',
        element: <ProductList/>,
    },
    {
        path: '/homepage/dashboard/produk-saya/tambah-produk',
        element: <AddProduct/>,
    },   
    {
        path: '/homepage/search/produk/:_id',
        element: <BuyerLayout><CatalogProduct/></BuyerLayout>,
    }, 
    {
        path: '/homepage/search/produk/checkout/:_id',
        element: <Checkout/>,
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
