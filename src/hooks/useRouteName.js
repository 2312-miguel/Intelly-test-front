import routes from "routes-admin";
import routesLogin from "routes-login";

export const useRouteName = () => {
  let name = "";
  routes.concat(routesLogin);
  routes.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = routes.rtlActive ? route.rtlName : route.name;
    }
  });
  return name;
};
