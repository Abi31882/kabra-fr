import { Reducer } from "redux";
import { Cart } from "../interfaces";
import {
  ADD_PRODUCT_TOCART_COMPLETE,
  ADD_PRODUCT_TOCART_ERROR,
  CREATE_CART_COMPLETE,
  GET_CART_COMPLETE,
  GET_CART_ERROR,
} from "../reducerConstants";

export interface CartState {
  myCart: Cart;
  error: string;
}

const initialState: CartState = {
  myCart: { id: "", user: "", product: [] },
  error: "",
};

export const cartReduser: Reducer<CartState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_CART_COMPLETE:
    case CREATE_CART_COMPLETE:
    case ADD_PRODUCT_TOCART_COMPLETE:
      return { ...state, myCart: action.payload };
    case GET_CART_ERROR:
    case ADD_PRODUCT_TOCART_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
