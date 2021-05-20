import http from "../http.js";

export const login = async (data) => {
  const response = await http.post("api/login", data).then((resolve) => {
    window.localStorage.setItem("Bearer", resolve.data.api_token);
    return resolve.data;
  });
  return response;
};

export const isLogged = () => {
  return !!window.localStorage.getItem("Bearer");
};

export const register = async (data) => {
  const response = await http.post("api/register", data).then((resolve) => {
    return resolve.data;
  });
  return response;
};

export const logout = async (data) => {
  const response = await http.post("api/logout", data).then((resolve) => {
    window.localStorage.removeItem("Bearer");
    return resolve.data;
  });
  return response;
};
