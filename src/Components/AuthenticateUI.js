import React from 'react';
import {LoginButton} from './LoginButton';
import MenuListComposition from './MenuListComposition';
import { useAuth0 } from '@auth0/auth0-react';

export const AuthenticateUI = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isAuthenticated) {
    return <MenuListComposition logout={logout}/>
  }
  else {
    return <LoginButton loginWithRedirect={loginWithRedirect}/>;
  }
}
