import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  path: string;
  loggedIn: boolean;
  redirectPath: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  path,
  loggedIn,
  redirectPath,
  element,
}) => {
  return loggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to={redirectPath} replace />
  );
};

export default ProtectedRoute;
