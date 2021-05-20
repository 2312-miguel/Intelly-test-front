import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";

import routes from "routes-login.js";

import styles from "assets/jss/material-dashboard-react/layouts/login.js";
import { isLogged } from "services/login.js/requests.login";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) =>
              isLogged() ? (
                <Redirect from="/auth" to="/admin/assets" />
              ) : (
                <prop.component {...props} />
              )
            }
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/auth" to="/auth/login" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Login() {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();

  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainPanel} ref={mainPanel}>
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
      </div>
    </div>
  );
}
