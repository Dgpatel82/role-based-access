import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function PrivateRoute({ children, allowedRoles }) {
    const { userInfo } = useUser();
    const userHasRequiredRole = userInfo && Array.isArray(allowedRoles) && allowedRoles.includes(userInfo.role.toUpperCase());

    if (!userInfo) {
        return <Navigate to='/' />;
    }

    if (userInfo && !userHasRequiredRole) {
        return <Navigate to='/dashboard' />;
    }

    return children;
}

export default PrivateRoute;
