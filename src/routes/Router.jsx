import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";

const ROUTE_LIST = [
    {
        path: '/',
        element: <SignIn/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    }
]