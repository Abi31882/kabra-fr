import {
  LoginRequest,
  LoginResponse,
  MeResponse,
  SignupRequest,
  SignupResponse,
} from "../interfaces";
import instance from "./base";

export const AUTH_TOKEN = "Login Token";

export const loginRequest = async (data: LoginRequest) => {
  return await instance.post<LoginResponse>("/users/login", data);
};

export const signupRequest = (data: SignupRequest) => {
  return instance.post<SignupResponse>("/users/signup", data);
};

const token = localStorage.getItem(AUTH_TOKEN);
export const meRequest = () => {
  return instance.get<MeResponse>("/users/me", {
    headers: { Authorization: token! },
  });
};

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
  window.location.href = "/";
};
