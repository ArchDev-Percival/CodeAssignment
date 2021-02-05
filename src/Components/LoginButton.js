import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const LoginButton = ({ loginWithRedirect }) => {
  const classes = useStyles();
  return (
    <Button variant="contained" color="secondary" onClick={loginWithRedirect}>
      Log in
    </Button>
  );
};
