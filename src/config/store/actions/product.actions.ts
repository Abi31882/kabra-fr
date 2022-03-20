import { Cart, NewCart, Products } from "../interfaces";
import {
  ADD_PRODUCT_TOCART_BEGIN,
  ADD_PRODUCT_TOCART_COMPLETE,
  ADD_PRODUCT_TOCART_ERROR,
  CREATE_CART_BEGIN,
  CREATE_CART_COMPLETE,
  CREATE_CART_ERROR,
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_COMPLETE,
  GET_ALL_PRODUCTS_ERROR,
  GET_CART_BEGIN,
  GET_CART_COMPLETE,
  GET_CART_ERROR,
  UPDATE_QUANTITY_BEGIN,
  UPDATE_QUANTITY_COMPLETE,
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

export const addproductToCartBeginAction = (
  productId: string,
  cartId: string,
  name: string,
  image: string,
  price: number,
  quantity: number
) => ({
  type: ADD_PRODUCT_TOCART_BEGIN,
  payload: { productId, cartId, name, image, price, quantity },
});

export const addproductToCartCompleteAction = (cart: Cart) => ({
  type: ADD_PRODUCT_TOCART_COMPLETE,
  payload: cart,
});

export const addproductToCartErrorAction = (err: string) => ({
  type: ADD_PRODUCT_TOCART_ERROR,
  payload: err,
});

export const updateQuantityBeginAction = (
  productId: string,
  cartId: string,
  quantity: number
) => ({
  type: UPDATE_QUANTITY_BEGIN,
  payload: { productId, cartId, quantity },
});

export const updateQuantityCompleteAction = (cart: Cart) => ({
  type: UPDATE_QUANTITY_COMPLETE,
  payload: cart,
});

export const updateQuantityErrorAction = (err: string) => ({
  type: UPDATE_QUANTITY_COMPLETE,
  payload: err,
});
