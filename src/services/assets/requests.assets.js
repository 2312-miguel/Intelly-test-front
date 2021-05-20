import http from "../http";

export const getAssets = async () => {
  const response = await http.get(`api/assets/`).then((resolve) => {
    return resolve.data;
  });
  return response;
};

export const getAsset = async (data) => {
  const response = await http.get(`api/assets/${data}`).then((resolve) => {
    return resolve.data;
  });
  return response;
};

export const assetsCreate = async (data) => {
  const response = await http
    .post(`api/assets/create`, data)
    .then((resolve) => {
      return resolve.data;
    });
  return response;
};

export const assetsEdit = async (data) => {
  const response = await http.put(`api/assets/update`, data).then((resolve) => {
    return resolve.data;
  });
  return response;
};
