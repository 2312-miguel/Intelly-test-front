import React, { useState } from "react";
import PropTypes from "prop-types";
import { Edit } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ModalAssets from "components/ModalAssets/ModalAssets";
import FormAssets from "./FormAssets/FormAssets";
import config from "config/configUrl";
import AssetQr from "./AssetQr/AssetQr";

const AssetEdit = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [dataQr, setDataQr] = useState("");

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  const afterSave = async (id) => {
    await handleClose();
    setDataQr(`${config.base_url}api/assets/${id}`);
  };

  return (
    <>
      {dataQr && <AssetQr path={dataQr} />}
      <IconButton
        color="primary"
        aria-label="outlined primary button group"
        onClick={() => handleClose(id)}
      >
        <Edit></Edit>
      </IconButton>
      <ModalAssets
        handleClose={handleClose}
        openModal={openModal}
        title={"Editar"}
        content={
          <FormAssets
            id={id}
            afterSave={afterSave}
            update
            handleClose={handleClose}
          />
        }
      />
    </>
  );
};

AssetEdit.propTypes = {
  id: PropTypes.any,
};

export default AssetEdit;
