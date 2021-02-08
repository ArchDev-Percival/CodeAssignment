import React from "react";
import { LoginButton } from "./LoginButton";
import AuthenticatedProfileMenu from "./AuthenticatedProfileMenu";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthenticateButtonMenuToggle = () => {
  const { isAuthenticated} = useAuth0();
  if (isAuthenticated) {
    return <AuthenticatedProfileMenu/>;
  } else {
    return <LoginButton/>;
  }
};
