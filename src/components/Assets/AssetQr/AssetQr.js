import React, { useState } from "react";
import QRCode from "qrcode.react";
import PropTypes from "prop-types";
import ModalAssets from "components/ModalAssets/ModalAssets";
import { useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { sendEmail } from "services/assets/requests.assets";
import { qrStyles } from "./styles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AssetQr = ({ path }) => {
  const [openModal, setOpenModal] = useState(true);
  const SwaContentl = withReactContent(Swal);
  const classes = qrStyles();
  const history = useHistory();

  const handleClose = () => {
    setOpenModal(!openModal);
    history.push("/admin/assets/");
  };

  const downloadQR = () => {
    setOpenModal(!openModal);
    const canvas = document.getElementById(`Qr-${path}`);
    const pngUrl = canvas.toDataURL("image/png");
    const response = sendEmailImage(pngUrl);
    if (!response.status) {
      SwaContentl.fire({
        title: "Felicitaciones",
        html: "IQ enviado correctamente",
        icon: "success",
        confirmButtonText: "Ok",
        willClose: () => {
          history.push("/admin/assets/");
        },
      });
    }
  };

  const sendEmailImage = async (pngUrl) => {
    await sendEmail(pngUrl).then((response) => response);
  };
  return (
    <ModalAssets
      handleClose={handleClose}
      openModal={openModal}
      title={"Qr"}
      content={
        <>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <QRCode
                className={classes.qr}
                href={"#"}
                src={"#"}
                id={`Qr-${path}`}
                value={path}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={downloadQR} variant="outlined" color="primary">
                Enviar a correo.
              </Button>
            </Grid>
          </Grid>
        </>
      }
    />
  );
};

AssetQr.propTypes = {
  path: PropTypes.string,
};

export default AssetQr;
