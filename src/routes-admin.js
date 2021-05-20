import { AddCircleOutline, List } from "@material-ui/icons";
import AssetCreate from "views/Dashboard/AssetCreate";
import AssetListPage from "views/Dashboard/AssetList.js";

const dashboardRoutes = [
  {
    path: "/assets",
    name: "Lista de Activos",
    icon: List,
    component: AssetListPage,
    layout: "/admin",
  },
  {
    path: "/store",
    name: "Crear Activo",
    icon: AddCircleOutline,
    component: AssetCreate,
    layout: "/admin",
  },
];

export default dashboardRoutes;
