import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Rating } from "@material-ui/lab";
import { DataGrid } from "@material-ui/data-grid";
import { getAssets } from "services/assets/requests.assets";
import { tableAssetStyles } from "./styles";
import AssetView from "components/Assets/AssetView";
import AssetEdit from "components/Assets/AssetEdit";

function RatingInputValue(props) {
  const classes = tableAssetStyles();
  const { item, applyValue } = props;

  const handleFilterChange = (event) => {
    applyValue({ ...item, value: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Rating
        name="custom-rating-filter-operator"
        placeholder="Filter value"
        value={Number(item.value)}
        onChange={handleFilterChange}
        precision={0.5}
      />
    </div>
  );
}

RatingInputValue.propTypes = {
  applyValue: PropTypes.func.isRequired,
  item: PropTypes.shape({
    columnField: PropTypes.string,
    id: PropTypes.number,
    operatorValue: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

const filterModel = {
  items: [{ columnField: "rating", value: "3.5", operatorValue: ">=" }],
};

export default function AssetList() {
  const [dataAssets, setDataAssets] = useState([]);
  const [pageSizes, setPageSizes] = useState(25);
  const getAssetsAll = async () => {
    await getAssets().then((response) => setDataAssets(response));
  };

  useEffect(() => {
    getAssetsAll();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "date_purchase", headerName: "Fecha de Venta", width: 250 },
    { field: "value", headerName: "Valor", type: "number", width: 250 },
    { field: "name", headerName: "Nombre", width: 250 },
    { field: "description", headerName: "Description", width: 250 },
    {
      field: "accion",
      headerName: "Acciones",
      width: 150,
      renderCell: function actions(params) {
        return (
          <>
            <AssetView {...params} />
            <AssetEdit {...params} />
          </>
        );
      },
    },
  ];
  if (columns.length > 0) {
    const ratingColumn = columns.find((column) => column.field === "rating");
    const ratingColIndex = columns.findIndex((col) => col.field === "rating");

    columns[ratingColIndex] = {
      ...ratingColumn,
    };
  }
  return (
    <div style={{ height: 579, width: "100%" }}>
      <DataGrid
        rows={dataAssets}
        columns={columns}
        filterModel={filterModel}
        onPageSizeChange={(GridPageChangeParamsGridPageChangeParams) =>
          setPageSizes(GridPageChangeParamsGridPageChangeParams.pageSize)
        }
        rowsPerPageOptions={[25, 50, 100]}
        pageSize={pageSizes}
      />
    </div>
  );
}
