import axios from "axios";
import {
  LoginRequest,
  LoginResponse,
  MeResponse,
  SignupRequest,
  SignupResponse,
} from "../interfaces";

// export const BASE_URL = "http://127.0.0.1:1337/api";
// export const BASE_URL = "https://boiling-journey-78408.herokuapp.com";
export const BASE_URL = "https://kabra-typ.herokuapp.com/api";

export const AUTH_TOKEN = "Login Token";

export const loginRequest = (data: LoginRequest) => {
  const url = BASE_URL + "/users/login";

  return axios.post<LoginResponse>(url, data);
};

export const signupRequest = (data: SignupRequest) => {
  const url = BASE_URL + "/users/signup";

  return axios.post<SignupResponse>(url, data);
};

const token = localStorage.getItem(AUTH_TOKEN);
export const meRequest = () => {
  const url = BASE_URL + "/users/me";

  return axios.get<MeResponse>(url, { headers: { Authorization: token! } });
};

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
  window.location.href = "/";
};
