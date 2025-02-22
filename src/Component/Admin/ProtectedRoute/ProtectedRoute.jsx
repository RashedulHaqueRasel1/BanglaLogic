import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/adminLogin" />;
}

export default ProtectedRoute;
