import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";
import { cartReduser } from "./reducers/cartReducer";
import { loadingBarReducer } from "./reducers/loadingBar";
import { productsReduser } from "./reducers/productReducer";
import { SagaMiddleware } from "./sagas";
import { watchAll } from "./sagas/mainSagas";

const reducer = combineReducers({
  auth: authReducer,
  products: productsReduser,
  cart: cartReduser,
  loadingBar: loadingBarReducer,
});

const enhancer =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(SagaMiddleware)
    : composeWithDevTools(applyMiddleware(SagaMiddleware));

export const store = createStore(reducer, enhancer);
SagaMiddleware.run(watchAll);

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
