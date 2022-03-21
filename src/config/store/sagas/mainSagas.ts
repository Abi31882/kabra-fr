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
    // alert(
    //   `welcome ${res.data.doc.userName}, account has been created successfully, we are logging you in`
    // );
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
    const res: any = yield call(createMyCart, action.payload);
    yield put(createCartCompleteAction(res.data));
    alert("cart created successfully");
  } catch (e: any) {
    alert(e.response.data.errors.user.message);
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
    endTheBar();
    const res: any = yield call(updateQuantity, productId, cartId, quantity);
    yield put(updateQuantityCompleteAction());
  } catch (e: any) {
    yield put(updateQuantityErrorAction(e.response.data));
    alert(e.response.data);
    endTheBar();
  }
}
// function* GetMe(action: AnyAction): Generator<any> {
//   try {
//     const res: any = yield call(me);
//     yield put(getMeCompleteAction(res.data.doc));
//   } catch (e: any) {
//     alert(e);
//   }
// }

// function* GetAllDiscussions(action: AnyAction): Generator<any> {
//   try {
//     const res: any = yield call(getAllDiscussions);
//     yield put(getAllDiscussionsCompletedAction(res.data));
//   } catch (e: any) {
//     alert(e);
//   }
// }

// function* GetSingleDiscussion(action: AnyAction): Generator<any> {
//   try {
//     const res: any = yield call(getSingleDiscussion, action.payload);
//     yield put(getSingleDiscussionCompleteAction(res.data));
//   } catch (e: any) {
//     alert(e);
//   }
// }

// function* CreateReply(action: AnyAction): Generator<any> {
//   try {
//     const res: any = yield call(reply, {
//       discussionID: action.payload.discussionID,
//       userID: action.payload.userID,
//       reply: action.payload.reply,
//     });
//     yield put(createReplyCompleteAction(res.data));
//     //eslint-disable-next-line
//     window.location.href = window.location.href;
//   } catch (e: any) {
//     alert(e);
//   }
// }

// function* CreateDiscussion(action: AnyAction): Generator<any> {
//   try {
//     const res: any = yield call(createDiscussion, {
//       topic: action.payload.topic,
//       description: action.payload.description,
//       id: action.payload.id,
//     });
//     yield put(createDiscussionCompleteAction(res.data));
//     alert("discussion created successfully");
//     window.location.href = "/discussion-all";
//   } catch (e: any) {
//     alert(e);
//   }
// }
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
  // yield all([]);
  // yield all([]);
  // yield
  // yield all([takeEvery(GET_ALL_DISCUSSIONS_BEGIN, GetAllDiscussions)]);
  // yield all([takeEvery(GET_SINGLE_DISCUSSION_BEGIN, GetSingleDiscussion)]);
  // yield all([takeEvery(CREATING_REPLY_BEGIN, CreateReply)]);
  // yield all([takeEvery(CREATING_DISCUSSION_BEGIN, CreateDiscussion)]);
}
