import { createSelector } from "reselect";
import { productStateSelector } from "./app.selectors";

export const allproductsSelector = createSelector(
  [productStateSelector],
  (productState) => productState.products
);
