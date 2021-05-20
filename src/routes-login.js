import { Dashboard } from "@material-ui/icons";
import LoginPage from "views/Login/Login.js";
import RegisterPage from "views/Login/Register.js";

const loginRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: Dashboard,
    component: LoginPage,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: Dashboard,
    component: RegisterPage,
    layout: "/auth",
  },
];

export default loginRoutes;
