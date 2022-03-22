import {
  call,
  put,
  all,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { beginTheBar, endTheBar } from "../../loadingBarService";
import {
  getMeCompleteAction,
  getMeErrorAction,
  loginCompleteAction,
  loginErrorAction,
  signupCompleteAction,
  signupErrorAction,
} from "../actions/auth.actions";
import {
  addproductToCartCompleteAction,
  addproductToCartErrorAction,
  createCartCompleteAction,
  getAllProductCompleteAction,
  getAllProductErrorAction,
  getCartBeginAction,
  getCartCompleteAction,
  getCartErrorAction,
  updateQuantityCompleteAction,
  updateQuantityErrorAction,
} from "../actions/product.actions";
import {
  AUTH_TOKEN,
  loginRequest,
  meRequest,
  signupRequest,
} from "../apis/auth";
import {
  addToCart,
  allProductsRequest,
  createMyCart,
  myCart,
  updateQuantity,
} from "../apis/main";
import {
  ADD_PRODUCT_TOCART_BEGIN,
  CREATE_CART_BEGIN,
  GET_ALL_PRODUCTS_BEGIN,
  GET_CART_BEGIN,
  GET_ME_BEGIN,
  LOGIN_BEGIN,
  SIGNUP_BEGIN,
  UPDATE_QUANTITY_BEGIN,
} from "../reducerConstants";

function* Login(action: AnyAction): Generator<any> {
  try {
    beginTheBar();
    const res: any = yield call(loginRequest, {
      userName: action.payload.userName,
      password: action.payload.password,
    });
    yield put(loginCompleteAction(res.data.doc));

    localStorage.setItem(AUTH_TOKEN, "Bearer " + res.data.token);
    endTheBar();
    window.location.href = "/";
  } catch (e: any) {
    yield put(loginErrorAction(e.response.data.message));
    alert(e.response.data.message);
    endTheBar();
  }
}

function* GetMe(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(meRequest);
    yield put(getMeCompleteAction(res.data.doc));
  } catch (e: any) {
    yield put(getMeErrorAction(e.response.data.message));
  }
}

function* Signup(action: AnyAction): Generator<any> {
  try {
    beginTheBar();
    const res: any = yield call(signupRequest, {
      userName: action.payload.userName,
      password: action.payload.password,
    });
    yield put(signupCompleteAction(res.data.doc));

    localStorage.setItem(AUTH_TOKEN, "Bearer " + res.data.token);
    endTheBar();

    window.location.href = "/";
  } catch (e: any) {
    yield put(signupErrorAction(e.response.data.message));
    alert(e.response.data.message);
    endTheBar();
  }
}

function* Allproducts(action: AnyAction): Generator<any> {
  try {
    beginTheBar();
    const res: any = yield call(allProductsRequest);
    yield put(getAllProductCompleteAction(res.data));
    endTheBar();
  } catch (e: any) {
    alert(e);
    yield put(getAllProductErrorAction(e));
    endTheBar();
  }
}

function* MyCart(action: AnyAction): Generator<any> {
  try {
    beginTheBar();
    const res: any = yield call(myCart);
    yield put(getCartCompleteAction(res.data));
    endTheBar();
  } catch (e: any) {
    yield put(getCartErrorAction(e.response.data));
    endTheBar();
  }
}

function* CreateCart(action: AnyAction): Generator<any> {
  try {
    beginTheBar();
    const res: any = yield call(createMyCart, action.payload);
    yield put(createCartCompleteAction(res.data));
    endTheBar();
  } catch (e: any) {
    alert(e.response.data.errors.user.message);
    endTheBar();
  }
}

function* AddProductToCart(action: AnyAction): Generator<any> {
  try {
    beginTheBar();
    const { productId, cartId, name, image, price, quantity } = action.payload;
    const res: any = yield call(
      addToCart,
      productId,
      cartId,
      name,
      image,
      price,
      quantity
    );
    yield put(addproductToCartCompleteAction(res.data.doc));
    endTheBar();
  } catch (e: any) {
    yield put(addproductToCartErrorAction(e.response.data));
    alert(e.response.data);
    endTheBar();
  }
}

function* UpdateQuantity(action: AnyAction): Generator<any> {
  const { productId, cartId, quantity } = action.payload;
  beginTheBar();
  try {
    // eslint-disable-next-line
    const res: any = yield call(updateQuantity, productId, cartId, quantity);
    yield put(updateQuantityCompleteAction());
    yield put(getCartBeginAction());
    endTheBar();
  } catch (e: any) {
    yield put(updateQuantityErrorAction(e.response.data));
    alert(e.response.data);
    endTheBar();
  }
}
export function* watchAll() {
  yield all([
    takeLatest(LOGIN_BEGIN, Login),
    takeEvery(SIGNUP_BEGIN, Signup),
    takeEvery(GET_ME_BEGIN, GetMe),
    takeLatest(GET_ALL_PRODUCTS_BEGIN, Allproducts),
    takeLatest(GET_CART_BEGIN, MyCart),
    takeEvery(CREATE_CART_BEGIN, CreateCart),
    takeLatest(ADD_PRODUCT_TOCART_BEGIN, AddProductToCart),
    takeLatest(UPDATE_QUANTITY_BEGIN, UpdateQuantity),
  ]);
}
