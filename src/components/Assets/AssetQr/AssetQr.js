import React, { useState } from "react";
import QRCode from "qrcode.react";
import PropTypes from "prop-types";
import ModalAssets from "components/ModalAssets/ModalAssets";
import { useHistory } from "react-router-dom";

const AssetQr = ({ path }) => {
  const [openModal, setOpenModal] = useState(true);
  const history = useHistory();
  const handleClose = () => {
    setOpenModal(!openModal);
    history.push("/admin/assets/");
  };
  return (
    <ModalAssets
      handleClose={handleClose}
      openModal={openModal}
      title={"Qr"}
      content={<QRCode value={path} />}
    />
  );
};

AssetQr.propTypes = {
  path: PropTypes.string,
};

export default AssetQr;
