import {
  call,
  put,
  all,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  getMeCompleteAction,
  getMeErrorAction,
  GET_ME_BEGIN,
  loginCompleteAction,
  loginErrorAction,
  LOGIN_BEGIN,
  signupCompleteAction,
  signupErrorAction,
  SIGNUP_BEGIN,
} from "../actions/auth.actions";
import {
  createCartCompleteAction,
  getAllProductCompleteAction,
  getAllProductErrorAction,
  getCartCompleteAction,
  getCartErrorAction,
} from "../actions/product.actions";
import {
  AUTH_TOKEN,
  loginRequest,
  meRequest,
  signupRequest,
} from "../apis/auth";
import { allProductsRequest, createMyCart, myCart } from "../apis/main";
import {
  CREATE_CART_BEGIN,
  GET_ALL_PRODUCTS_BEGIN,
  GET_CART_BEGIN,
} from "../reducerConstants";

function* Login(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(loginRequest, {
      userName: action.payload.userName,
      password: action.payload.password,
    });
    yield put(loginCompleteAction(res.data.doc));

    localStorage.setItem(AUTH_TOKEN, "Bearer " + res.data.token);
    alert(`welcome ${res.data.doc.userName}, we are logging you in`);
    window.location.href = "/";
  } catch (e: any) {
    yield put(loginErrorAction(e.response.data.message));
    alert(e.response.data.message);
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
    const res: any = yield call(signupRequest, {
      userName: action.payload.userName,
      password: action.payload.password,
    });
    yield put(signupCompleteAction(res.data.doc));

    localStorage.setItem(AUTH_TOKEN, "Bearer " + res.data.token);

    alert(
      `welcome ${res.data.doc.userName}, account has been created successfully, we are logging you in`
    );
    window.location.href = "/";
  } catch (e: any) {
    yield put(signupErrorAction(e.response.data.message));
    alert(e.response.data.message);
  }
}

function* Allproducts(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(allProductsRequest);
    yield put(getAllProductCompleteAction(res.data));
  } catch (e: any) {
    alert(e);
    yield put(getAllProductErrorAction(e));
  }
}

function* MyCart(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(myCart);
    yield put(getCartCompleteAction(res.data.doc));
  } catch (e: any) {
    yield put(getCartErrorAction(e.response.data));
  }
}

function* CreateCart(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(createMyCart, action.payload);
    yield put(createCartCompleteAction(res.data));
    alert("cart created successfully");
  } catch (e: any) {
    console.log(e.response.data.errors.user.message);
    alert(e.response.data.errors.user.message);
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
  ]);
  // yield all([]);
  // yield all([]);
  // yield
  // yield all([takeEvery(GET_ALL_DISCUSSIONS_BEGIN, GetAllDiscussions)]);
  // yield all([takeEvery(GET_SINGLE_DISCUSSION_BEGIN, GetSingleDiscussion)]);
  // yield all([takeEvery(CREATING_REPLY_BEGIN, CreateReply)]);
  // yield all([takeEvery(CREATING_DISCUSSION_BEGIN, CreateDiscussion)]);
}
