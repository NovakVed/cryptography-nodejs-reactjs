import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    color: '#000000',
    marginBottom: '1%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        <Toolbar variant="dense">
          <IconButton component={Link} to={'/'} edge="start" className={classes.menuButton} color="inherit">
            <LockOutlinedIcon />
          </IconButton>
          <Typography variant="h6">
            Projekt iz kolegija OS2 - Digitalni potpis
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
