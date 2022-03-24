import { LoginRequest, SignupRequest, User } from "../interfaces";
import {
  GET_ME_BEGIN,
  GET_ME_COMPLETE,
  GET_ME_ERROR,
  LOGIN_BEGIN,
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_COMPLETE,
  SIGNUP_ERROR,
} from "../reducerConstants";
import { Dispatch } from "redux";
import { AppState } from "..";
import { beginTheBar, endTheBar } from "../../loadingBarService";
import {
  AUTH_TOKEN,
  loginRequest,
  meRequest,
  signupRequest,
} from "../apis/auth";

export const loginBeginAction =
  (data: LoginRequest) => async (dispatch: Dispatch, state: AppState) => {
    beginTheBar();
    dispatch(loginBegin());
    await loginRequest(data)
      .then((r) => {
        dispatch(loginCompleteAction(r.data.doc));
        localStorage.setItem(AUTH_TOKEN, "Bearer " + r.data.token);

        endTheBar();
        window.location.href = "/";
      })
      .catch((e) => {
        dispatch(loginErrorAction(e.response.data.message));
        alert(e.response.data.message);
        endTheBar();
      });
  };

export const loginBegin = () => ({
  type: LOGIN_BEGIN,
});

export const loginCompleteAction = (user: User) => ({
  type: LOGIN_COMPLETE,
  payload: user,
});

export const loginErrorAction = (err: string) => ({
  type: LOGIN_ERROR,
  payload: err,
});

export const signupBeginAction =
  (data: SignupRequest) => async (dispatch: Dispatch, state: AppState) => {
    beginTheBar();
    dispatch(signupBegin());
    await signupRequest(data)
      .then((r) => {
        dispatch(signupCompleteAction(r.data.doc));
        localStorage.setItem(AUTH_TOKEN, "Bearer " + r.data.token);

        endTheBar();
        window.location.href = "/";
      })
      .catch((e) => {
        dispatch(signupErrorAction(e.response.data.message));
        alert(e.response.data.message);
        endTheBar();
      });
  };

export const signupBegin = () => ({
  type: SIGNUP_BEGIN,
});

export const signupCompleteAction = (user: User) => ({
  type: SIGNUP_COMPLETE,
  payload: user,
});

export const signupErrorAction = (err: string) => ({
  type: SIGNUP_ERROR,
  payload: err,
});

export const getMeBeginAction =
  () => async (dispatch: Dispatch, state: AppState) => {
    dispatch(getMebegin());
    await meRequest()
      .then((r) => {
        dispatch(getMeCompleteAction(r.data.doc));
      })
      .catch((e) => {
        dispatch(getMeErrorAction(e.response.data.message));
      });
  };

export const getMebegin = () => ({
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
