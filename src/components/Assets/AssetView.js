import React, { useState } from "react";
import PropTypes from "prop-types";
import { Visibility } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ModalAssets from "components/ModalAssets/ModalAssets";
import AssetInfo from "./AssetInfo/AssetInfo";
const AssetView = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <IconButton
        color="primary"
        aria-label="outlined primary button group"
        onClick={() => handleClose()}
      >
        <Visibility></Visibility>
      </IconButton>
      <ModalAssets
        handleClose={handleClose}
        openModal={openModal}
        title={`ID ACTIVO: ${id}`}
        content={<AssetInfo id={id} />}
      />
    </>
  );
};

AssetView.propTypes = {
  id: PropTypes.any,
};

export default AssetView;
