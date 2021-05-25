import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {
  EventAvailable,
  EventNote,
  Description,
  BusinessCenter,
  MonetizationOn,
  Apple,
} from "@material-ui/icons";
import { getAsset } from "services/assets/requests.assets";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    width: "50%",
    marginLeft: "35%",
  },
}));

const AssetInfo = ({ id }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const getAssetId = async () => {
    await getAsset(id).then((response) => setData(response));
  };

  useEffect(() => {
    getAssetId();
  }, []);

  const column = [
    {
      labe: "Nombre",
      icon: <Apple />,
      field: "name",
    },
    {
      labe: "Fecha de compra del Activo",
      icon: <EventAvailable />,
      field: "date_purchase",
    },
    {
      labe: "Fecha de registro del Activo",
      icon: <EventNote />,
      field: "date_register",
    },
    {
      labe: "Descripción",
      icon: <Description />,
      field: "description",
    },
    {
      labe: "Nombre de empresa que registra",
      icon: <BusinessCenter />,
      field: "name_business",
    },
    {
      labe: "Valor",
      icon: <MonetizationOn />,
      field: "value",
    },
  ];

  return (
    <>
      <List className={classes.root}>
        {column.map((row, i) => {
          return (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar>{row.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={row.labe} secondary={data[row.field]} />
            </ListItem>
          );
        })}
        <ListItem>
          <ListItemText
            primary={"Imagen"}
            secondary={
              <img
                className={classes.image}
                src={`data:image/png;base64,${data.image}`}
              />
            }
          />
        </ListItem>
      </List>
    </>
  );
};

AssetInfo.propTypes = {
  id: PropTypes.any,
};

export default AssetInfo;
