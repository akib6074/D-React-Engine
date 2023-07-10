import { Navigate } from "react-router-dom";
import http from "../http-common";

const login = async (email, password) => {
  const res = await http.post("auth/login", { email, password });

  if (res.data?.data?.access_token) {
    localStorage.setItem("user", JSON.stringify(res.data?.data));
  }
  return res.data.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
