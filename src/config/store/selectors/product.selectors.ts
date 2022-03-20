import { createSelector } from "reselect";
import { productStateSelector } from "./app.selectors";

export const allproductsSelector = createSelector(
  [productStateSelector],
  (productState) => productState.products
);

export const productLoadingSelector = createSelector(
  [productStateSelector],
  (productState) => productState.loading
);
