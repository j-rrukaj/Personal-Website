
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Skywalker
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4.5),
  },
}));

function Footer() {
  const classes = useStyles();
    return (
        <div>
         <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          John Rrukaj
        </Typography>
        <Copyright />
      </footer>
        </div>
    )
}

export default Footer
