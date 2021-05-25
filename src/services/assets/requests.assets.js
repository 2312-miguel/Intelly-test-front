import http from "../http";

export const getAssets = async () => {
  const response = await http.get(`api/assets`).then((resolve) => {
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
    .post(`api/assets/create`, new FormData(data), {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((resolve) => {
      return resolve.data;
    });
  return response;
};

export const sendEmail = async (data) => {
  const response = await http.post(`api/assets/email`, data).then((resolve) => {
    return resolve.data;
  });
  return response;
};

export const assetsEdit = async (data, id) => {
  const response = await http
    .post(`api/assets/update/${id}?_method=put`, new FormData(data), {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((resolve) => {
      return resolve.data;
    });
  return response;
};
