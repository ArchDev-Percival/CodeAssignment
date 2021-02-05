import React from "react";
import { LoginButton } from "./LoginButton";
import MenuListComposition from "./MenuListComposition";

export const AuthenticateUI = ({
  isAuthenticated,
  logout,
  loginWithRedirect,
  user,
}) => {
  if (isAuthenticated) {
    return <MenuListComposition logout={logout} user={user} />;
  } else {
    return <LoginButton loginWithRedirect={loginWithRedirect} />;
  }
};
