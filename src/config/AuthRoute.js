import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const AuthRoute = ({ element }) => {
    const isAuthenticated = !!localStorage.getItem('token');

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Route element={element} />;
};

export default AuthRoute;
