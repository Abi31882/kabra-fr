import { Products } from "../interfaces";
import {
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_COMPLETE,
  GET_ALL_PRODUCTS_ERROR,
} from "../reducerConstants";

export const getAllProductBeginAction = () => ({
  type: GET_ALL_PRODUCTS_BEGIN,
});

export const getAllProductCompleteAction = (products: Products[]) => ({
  type: GET_ALL_PRODUCTS_COMPLETE,
  payload: products,
});

export const getAllProductErrorAction = (err: string) => ({
  type: GET_ALL_PRODUCTS_ERROR,
  payload: err,
});
