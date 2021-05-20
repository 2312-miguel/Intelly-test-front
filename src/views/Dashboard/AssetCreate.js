import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { dashboardStyles } from "./styles";
import FormAssets from "components/Assets/FormAssets/FormAssets";
import AssetQr from "components/Assets/AssetQr/AssetQr";
import config from "config/configUrl";

const AssetCreate = () => {
  const classes = dashboardStyles();
  const [dataQr, setDataQr] = useState("");
  const afterSave = (id) => {
    setDataQr(`${config.base_url}api/assets/${id}`);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {dataQr && <AssetQr path={dataQr} />}
          <FormAssets afterSave={afterSave} />
        </div>
      </Container>
    </>
  );
};

export default AssetCreate;
