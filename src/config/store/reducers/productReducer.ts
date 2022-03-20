import { Reducer } from "redux";
import { Products } from "../interfaces";
import {
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_COMPLETE,
  GET_ALL_PRODUCTS_ERROR,
} from "../reducerConstants";

export interface ProductState {
  products: Products[];
  error: string;
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  error: "",
  loading: false,
};

export const productsReduser: Reducer<ProductState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_BEGIN:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_COMPLETE:
      return { ...state, products: action.payload, loading: false };
    case GET_ALL_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
