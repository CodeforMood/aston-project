import React from 'react';
import {Navigate, RouteProps } from 'react-router-dom';
import { AppRoute } from '../../utils/const'

const ProtectedRoute: React.FC<RouteProps & { componentName: string } & { loggedIn: boolean }> = ({ element, componentName, loggedIn, ...rest }) => {
  return loggedIn ? React.cloneElement(element as React.ReactElement<any>, { componentName }) : <Navigate to={AppRoute.SignIn} />;
};

export default ProtectedRoute;
