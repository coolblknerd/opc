import React from "react";
import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

export default function Login() {
  const classes = useStyles();
  const { handleSubmit, register } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
}
