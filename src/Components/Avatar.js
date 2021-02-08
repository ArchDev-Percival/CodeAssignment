import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function FallbackAvatars() {
  const classes = useStyles();
  const { user } = useAuth0();

  return (
    <div className={classes.root}>
      <Avatar alt={user.name} src={user.picture} className={classes.orange}>
        {user.name[0]}
      </Avatar>
      <ExpandMoreIcon />
    </div>
  );
}
