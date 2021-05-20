import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { assetsCreate } from "services/assets/requests.assets";
import { dashboardStyles } from "views/Dashboard/styles";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { getAsset, assetsEdit } from "services/assets/requests.assets";
import withReactContent from "sweetalert2-react-content";

const FormAssets = ({ id, afterSave, update, handleClose }) => {
  const classes = dashboardStyles();
  const [formData, setFormData] = useState({
    date_purchase: "",
    value: "",
    name: "",
    description: "",
    name_business: "",
    date_register: "",
    image: "",
  });
  const SwaContentl = withReactContent(Swal);
  const inputLabelShrink = update;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (update) {
      updateAsset();
    } else {
      createAsset();
    }
  };

  const createAsset = async () => {
    const result = await assetsCreate(formData).then((response) => response);
    if (result) {
      SwaContentl.fire({
        title: "Felicitaciones",
        html: "Activo creado correctamente",
        icon: "success",
        confirmButtonText: "Ok",
        willClose: () => {
          afterSave(result.id);
        },
      });
    }
  };

  const updateAsset = async () => {
    const result = await assetsEdit(formData).then((response) => response);
    if (result.status) {
      SwaContentl.fire({
        title: "Felicitaciones",
        html: "Activo actualizado correctamente",
        icon: "success",
        confirmButtonText: "Ok",
        willClose: () => {
          afterSave(result.id);
        },
      });
      handleClose();
    }
  };

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const getAssetIds = async () => {
    await getAsset(id).then((response) => setFormData(response));
  };

  useEffect(() => {
    if (update) {
      getAssetIds();
    }
  }, []);

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          onChange={handleInput}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="date"
          id="date_purchase"
          label="Fecha Compra del Activo"
          name="date_purchase"
          value={formData.date_purchase}
          InputLabelProps={{
            shrink: true,
          }}
          autoFocus
        />
        <TextField
          onChange={handleInput}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="value"
          value={formData.value}
          label="Valor"
          type="number"
          InputLabelProps={{
            shrink: inputLabelShrink,
          }}
          id="value"
        />
        <TextField
          onChange={handleInput}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre"
          name="name"
          value={formData.name}
          InputLabelProps={{
            shrink: inputLabelShrink,
          }}
          autoFocus
        />
        <TextField
          onChange={handleInput}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="description"
          value={formData.description}
          InputLabelProps={{
            shrink: inputLabelShrink,
          }}
          label="Description"
          id="description"
        />
        <TextField
          onChange={handleInput}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name_business"
          label="Nombre de la Empresa que registra"
          name="name_business"
          value={formData.name_business}
          InputLabelProps={{
            shrink: inputLabelShrink,
          }}
          autoFocus
        />
        <TextField
          onChange={handleInput}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="date_register"
          value={formData.date_register}
          label="Fecha de Registro del Activo"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          id="date_register"
        />
        <TextField
          onChange={handleInput}
          variant="outlined"
          margin="normal"
          fullWidth
          name="image"
          value={formData.image}
          label="image"
          type="file"
          id="image"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Guardar
        </Button>
      </form>
    </>
  );
};

FormAssets.propTypes = {
  afterSave: PropTypes.func,
  id: PropTypes.any,
  update: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default FormAssets;
