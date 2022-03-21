import { AppState } from "..";

export const authStateSelector = (state: AppState) => state.auth;
export const productStateSelector = (state: AppState) => state.products;
export const cartStateSelector = (state: AppState) => state.cart;
export const loadingStateSelector = (state: AppState) => state.loadingBar;
