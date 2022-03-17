import { createSelector } from "reselect";
import { cartStateSelector } from "./app.selectors";

export const cartIdSelector = createSelector(
  [cartStateSelector],
  (cartState) => cartState.cart?.id
);
