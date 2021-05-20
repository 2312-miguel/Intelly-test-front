import { makeStyles } from "@material-ui/core/styles";

export const dashboardStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "120%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const tableAssetStyles = makeStyles({
  root: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingLeft: 50,
  },
});
