import { Reducer } from "redux";
import { SET_PROGRESS } from "../reducerConstants";

interface loadingState {
  progress: number;
}

const initialState: loadingState = {
  progress: 0,
};

export const loadingBarReducer: Reducer<loadingState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_PROGRESS:
      return { ...state, progress: action.payload };

    default:
      return state;
  }
};
