import { createSelector } from "reselect";
import { loadingStateSelector } from "./app.selectors";

export const loadingBarSelector = createSelector(
  [loadingStateSelector],
  (loadingState) => loadingState.progress
);
