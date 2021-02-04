import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function FallbackAvatars({user}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={user.name} src={user.picture} className={classes.orange}>{user.name[0]}</Avatar>
      <ExpandMoreIcon/>
    </div>
  );
}