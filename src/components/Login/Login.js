import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import AuthService from "../../services/auth.service";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const { handleSubmit, register } = useForm();
  const { history } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = handleSubmit((data) => {
    AuthService.login(data).then(() => {
      history.push("/");
      window.location.reload();
    });
  });

  return (
    <Container className={classes.container} maxWidth="xs">
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={register}
                  label="Email"
                  name="email"
                  size="small"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={register}
                  label="Password"
                  name="password"
                  size="small"
                  variant="outlined"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              color="secondary"
              variant="contained"
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default withRouter(Login);
