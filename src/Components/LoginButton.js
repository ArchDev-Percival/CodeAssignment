import React from "react";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="contained" color="secondary" onClick={loginWithRedirect}>
      Log in
    </Button>
  );
};
