import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { FirebaseAuthContext } from '../provider/FirebaseAuthContext';
import Spinner from '../components/Spinner';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(FirebaseAuthContext)
    const location = useLocation()

    if (loading) {
        return <Spinner />
    }

    // if user don't found login so sent to login pages to login 
    if (!user) {
        return <Navigate state={location?.pathname} to='/login' />
    }

    return children;
};

export default PrivateRoutes;