import { Reducer } from "redux";
import { Products } from "../interfaces";
import {
  GET_ALL_PRODUCTS_COMPLETE,
  GET_ALL_PRODUCTS_ERROR,
} from "../reducerConstants";

export interface ProductState {
  products: Products[];
  error: string;
}

const initialState: ProductState = {
  products: [],
  error: "",
};

export const productsReduser: Reducer<ProductState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_COMPLETE:
      return { ...state, products: action.payload };
    case GET_ALL_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
