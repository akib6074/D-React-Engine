import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const auth = JSON.parse(localStorage.getItem("user"));
    return auth?.access_token ? children : <Navigate to="/" />;
};