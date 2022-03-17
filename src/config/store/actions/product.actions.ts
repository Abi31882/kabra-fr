import { Cart, NewCart, Products } from "../interfaces";
import {
  CREATE_CART_BEGIN,
  CREATE_CART_COMPLETE,
  CREATE_CART_ERROR,
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_COMPLETE,
  GET_ALL_PRODUCTS_ERROR,
  GET_CART_BEGIN,
  GET_CART_COMPLETE,
  GET_CART_ERROR,
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

export const getCartBeginAction = () => ({
  type: GET_CART_BEGIN,
});

export const getCartCompleteAction = (cart: Cart) => ({
  type: GET_CART_COMPLETE,
  payload: cart,
});

export const getCartErrorAction = (err: string) => ({
  type: GET_CART_ERROR,
  payload: err,
});

export const createCartBeginAction = (user: string) => ({
  type: CREATE_CART_BEGIN,
  payload: user,
});

export const createCartCompleteAction = (newCart: NewCart) => ({
  type: CREATE_CART_COMPLETE,
  payload: newCart,
});

export const createCartErrorAction = (err: string) => ({
  type: CREATE_CART_ERROR,
  payload: err,
});
