import { Reducer } from "redux";
import { User } from "../interfaces";
import {
  GET_ME_COMPLETE,
  GET_ME_ERROR,
  LOGIN_BEGIN,
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  SIGNUP_COMPLETE,
  SIGNUP_ERROR,
} from "../reducerConstants";

export interface AuthState {
  user: User;
  error: string;
  loading: boolean;
}

const initialState: AuthState = {
  user: { _id: "", userName: "" },
  error: "",
  loading: false,
};

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return { ...state, loading: true };
    case SIGNUP_COMPLETE:
    case LOGIN_COMPLETE:
    case GET_ME_COMPLETE:
      return {
        ...state,
        user: action.payload,
        loading: false,
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
