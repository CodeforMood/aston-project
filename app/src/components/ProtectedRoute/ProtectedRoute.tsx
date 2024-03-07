import React from 'react';
import {Navigate, RouteProps } from 'react-router-dom';

const ProtectedRoute: React.FC<RouteProps & { componentName: string } & { loggedIn: boolean }> = ({ element, componentName, loggedIn, ...rest }) => {
  console.log(loggedIn);
  return loggedIn ? React.cloneElement(element as React.ReactElement<any>, { componentName }) : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;