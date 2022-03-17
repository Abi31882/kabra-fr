import { Reducer } from "redux";
import { User } from "../interfaces";
import {
  GET_ME_COMPLETE,
  GET_ME_ERROR,
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  SIGNUP_COMPLETE,
  SIGNUP_ERROR,
} from "../reducerConstants";

export interface AuthState {
  user: User;
  error: string;
}

const initialState: AuthState = {
  user: { _id: "", userName: "" },
  error: "",
};

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SIGNUP_COMPLETE:
    case LOGIN_COMPLETE:
    case GET_ME_COMPLETE:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
    case GET_ME_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
