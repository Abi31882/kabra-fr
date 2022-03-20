import { createSelector } from "reselect";
import { authStateSelector } from "./app.selectors";

export const userIdSelector = createSelector(
  [authStateSelector],
  (authState) => authState.user._id
);

export const authLoadingSelector = createSelector(
  [authStateSelector],
  (authState) => authState.loading
);
