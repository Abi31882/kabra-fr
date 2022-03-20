import { createSelector } from "reselect";
import { cartStateSelector } from "./app.selectors";

export const cartIdSelector = createSelector(
  [cartStateSelector],
  (cartState) => cartState.myCart?.id
);

export const cartProductsSelector = createSelector(
  [cartStateSelector],
  (cartState) => cartState.myCart.product
);

export const cartLoadingSelector = createSelector(
  [cartStateSelector],
  (cartState) => cartState.loading
);
