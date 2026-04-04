import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(!user) {
        return <Navigate to='/auth/login' state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;