import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const getUserToken = () => {
    const token = Cookies.get('token');
    if (!token) {
        return null;
    }

    const decoded = jwtDecode(token);
    if (!decoded) {
        return null;
    }

    return {
        token: token,
        user: decoded.user
    }
}

export {
    getUserToken
}