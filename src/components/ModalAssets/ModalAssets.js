import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { modalStyles } from "./styles";

const ModalAssets = ({ content, title, handleClose, openModal }) => {
  const classes = modalStyles();
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={openModal}
      fullWidth={false}
      maxWidth="sm"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
        <hr />
      </DialogTitle>
      <DialogContent>
        <Typography component={"span"} variant={"body2"}>
          <div className={classes.content}> {content} </div>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

ModalAssets.propTypes = {
  content: PropTypes.any,
  title: PropTypes.any,
  handleClose: PropTypes.func,
  openModal: PropTypes.bool,
};

export default ModalAssets;
