import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();
  const classes = useStyles();
  return (
    <Button variant="contained" color="secondary" onClick={loginWithRedirect}>
      Log in
    </Button>
  );
};
