import { Reducer } from "redux";
import { Cart } from "../interfaces";
import {
  CREATE_CART_COMPLETE,
  GET_CART_COMPLETE,
  GET_CART_ERROR,
} from "../reducerConstants";

export interface CartState {
  cart: Cart;
  error: string;
}

const initialState: CartState = {
  cart: { id: "", user: "", product: [] },
  error: "",
};

export const cartReduser: Reducer<CartState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_CART_COMPLETE:
    case CREATE_CART_COMPLETE:
      return { ...state, cart: action.payload };
    case GET_CART_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
