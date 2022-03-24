import { Dispatch } from "redux";
import { AppState } from "..";
import { beginTheBar, endTheBar } from "../../loadingBarService";
import {
  addToCart,
  allProductsRequest,
  createMyCart,
  myCart,
  updateQuantity,
} from "../apis/main";
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
  SET_PROGRESS,
  UPDATE_QUANTITY_BEGIN,
  UPDATE_QUANTITY_COMPLETE,
  UPDATE_QUANTITY_ERROR,
} from "../reducerConstants";

export const getAllProductBeginAction =
  () => async (dispatch: Dispatch, state: AppState) => {
    beginTheBar();
    dispatch(getAllProductBegin());
    await allProductsRequest()
      .then((r) => {
        dispatch(getAllProductCompleteAction(r.data));
        endTheBar();
      })
      .catch((e) => {
        dispatch(getAllProductErrorAction(e));
        endTheBar();
      });
  };

export const getAllProductBegin = () => ({
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

export const getCartBeginAction: any =
  () => async (dispatch: Dispatch, state: AppState) => {
    beginTheBar();
    dispatch(getCartBegin());
    await myCart()
      .then((r) => {
        dispatch(getCartCompleteAction(r.data));
        endTheBar();
      })
      .catch((e) => {
        dispatch(getCartErrorAction(e.response.data));
        endTheBar();
      });
  };

export const getCartBegin = () => ({
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

export const createCartBeginAction =
  () => async (dispatch: Dispatch, state: any) => {
    beginTheBar();
    dispatch(createCartBegin());
    await createMyCart(state().auth.user._id)
      .then((r) => {
        const { user } = createCartCompleteAction(r.data).payload;
        console.log(user);
        dispatch(createCartCompleteAction(r.data));
        console.log(createCartCompleteAction(r.data).payload);
        endTheBar();
      })
      .catch((e) => {
        dispatch(createCartErrorAction(e.response.data.errors.user.message));
        endTheBar();
      });
  };

export const createCartBegin = () => ({
  type: CREATE_CART_BEGIN,
});

export const createCartCompleteAction = (newCart: NewCart) => ({
  type: CREATE_CART_COMPLETE,
  payload: newCart,
});

export const createCartErrorAction = (err: string) => ({
  type: CREATE_CART_ERROR,
  payload: err,
});

export const addproductToCartBeginAction =
  (
    productId: string,
    cartId: string,
    name: string,
    image: string,
    price: number,
    quantity: number
  ) =>
  async (dispatch: Dispatch, state: any) => {
    beginTheBar();
    dispatch(addproductToCartBegin());
    await addToCart(productId, cartId, name, image, price, quantity)
      .then((r) => {
        dispatch(addproductToCartCompleteAction(r.data.doc));
        endTheBar();
      })
      .catch((e) => {
        dispatch(addproductToCartErrorAction(e.response.data));
        endTheBar();
      });
  };

export const addproductToCartBegin = () => ({
  type: ADD_PRODUCT_TOCART_BEGIN,
});

export const addproductToCartCompleteAction = (cart: Cart) => ({
  type: ADD_PRODUCT_TOCART_COMPLETE,
  payload: cart,
});

export const addproductToCartErrorAction = (err: string) => ({
  type: ADD_PRODUCT_TOCART_ERROR,
  payload: err,
});

export const updateQuantityBeginAction =
  (productId: string, cartId: string, quantity: number) =>
  async (dispatch: Dispatch, state: any) => {
    beginTheBar();
    dispatch(updateQuantityBegin());
    await updateQuantity(productId, cartId, quantity)
      .then((r) => {
        dispatch(updateQuantityCompleteAction());
        dispatch(getCartBeginAction());
        endTheBar();
      })
      .catch((e) => {
        dispatch(updateQuantityErrorAction(e.response.data));
        alert(e.response.data);
        endTheBar();
      });
  };

export const updateQuantityBegin = () => ({
  type: UPDATE_QUANTITY_BEGIN,
});

export const updateQuantityCompleteAction = () => ({
  type: UPDATE_QUANTITY_COMPLETE,
});

export const updateQuantityErrorAction = (err: string) => ({
  type: UPDATE_QUANTITY_ERROR,
  payload: err,
});

export const setLoadingBarProgress = (value: any) => ({
  type: SET_PROGRESS,
  payload: value,
});
