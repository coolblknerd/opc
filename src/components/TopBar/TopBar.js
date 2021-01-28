import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import AuthService from "../../services/auth.service";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const logout = () => {
    AuthService.logout();
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
        <Button color="inherit">
          <Link href="/login" onClick={logout} color="inherit">
            Logout
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
