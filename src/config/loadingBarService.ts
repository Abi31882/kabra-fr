import { store } from "./store";
import { setLoadingBarProgress } from "./store/actions/product.actions";

export const beginTheBar = () => {
  let i = Math.floor(Math.random() * 40) + 10;
  store.dispatch(setLoadingBarProgress(i));
};

export const endTheBar = () => {
  store.dispatch(setLoadingBarProgress(100));
};
