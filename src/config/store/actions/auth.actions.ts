import { LoginRequest, SignupRequest, User } from "../interfaces";
import { GET_ME_ERROR, LOGIN_ERROR, SIGNUP_ERROR } from "../reducerConstants";

export const LOGIN_BEGIN = "login/begin";
export const LOGIN_COMPLETE = "login/complete";

export const SIGNUP_BEGIN = "signup/begin";
export const SIGNUP_COMPLETE = "signup/complete";

export const GET_ME_BEGIN = "get/me_begin";
export const GET_ME_COMPLETE = "get/me_complete";

export const loginBeginAction = (data: LoginRequest) => ({
  type: LOGIN_BEGIN,
  payload: data,
});

export const loginCompleteAction = (user: User) => ({
  type: LOGIN_COMPLETE,
  payload: user,
});

export const loginErrorAction = (err: string) => ({
  type: LOGIN_ERROR,
  payload: err,
});

export const signupBeginAction = (data: SignupRequest) => ({
  type: SIGNUP_BEGIN,
  payload: data,
});

export const signupCompleteAction = (user: User) => ({
  type: SIGNUP_COMPLETE,
  payload: user,
});

export const signupErrorAction = (err: string) => ({
  type: SIGNUP_ERROR,
  payload: err,
});

export const getMeBeginAction = () => ({
  type: GET_ME_BEGIN,
});

export const getMeCompleteAction = (user: User) => ({
  type: GET_ME_COMPLETE,
  payload: user,
});

export const getMeErrorAction = (err: string) => ({
  type: GET_ME_ERROR,
  payload: err,
});
