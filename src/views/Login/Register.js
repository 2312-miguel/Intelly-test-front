import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";

import Container from "@material-ui/core/Container";
import { registerStyles } from "./styles";
import { register } from "services/login.js/requests.login";

export default function Register() {
  const classes = registerStyles();
  const [formData, setFormData] = useState();
  const history = useHistory();
  const SwaContentl = withReactContent(Swal);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerBusiness();
  };

  const registerBusiness = async () => {
    const result = await register(formData).then((response) => response);
    if (result) {
      SwaContentl.fire({
        title: "Felicitaciones",
        html: "Empresa creada correctamente",
        icon: "success",
        confirmButtonText: "Ok",
        willClose: () => {
          history.push("/admin/assets/");
        },
      });
    }
  };

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={handleInput}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                id="correo"
                label="Correo"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                id="pass"
                type="password"
                label="Contraseña"
                name="password"
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                id="pass"
                type="password"
                label="Confirmar Contraseña"
                name="password_confirmation"
                autoComplete="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="auth/login" variant="body2">
                ¿Ya tienes una cuenta? Ingresa.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
