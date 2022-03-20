import { Reducer } from "redux";
import { Cart } from "../interfaces";
import {
  ADD_PRODUCT_TOCART_COMPLETE,
  ADD_PRODUCT_TOCART_ERROR,
  CREATE_CART_COMPLETE,
  GET_CART_COMPLETE,
  GET_CART_ERROR,
  UPDATE_QUANTITY_BEGIN,
  UPDATE_QUANTITY_COMPLETE,
} from "../reducerConstants";

export interface CartState {
  myCart: Cart;
  error: string;
  loading: boolean;
}

const initialState: CartState = {
  myCart: { id: "", user: "", product: [] },
  error: "",
  loading: false,
};

export const cartReduser: Reducer<CartState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_QUANTITY_BEGIN:
      return { ...state, loading: true };
    case GET_CART_COMPLETE:
    case CREATE_CART_COMPLETE:
    case ADD_PRODUCT_TOCART_COMPLETE:
    case UPDATE_QUANTITY_COMPLETE:
      return { ...state, myCart: action.payload, loading: false };
    case GET_CART_ERROR:
    case ADD_PRODUCT_TOCART_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
