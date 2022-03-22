import MyCart from "../../Pages/cart.page";
import createProduct from "../../Pages/createProduct.page";
import Login from "../../Pages/login.page";
import MyAccount from "../../Pages/myAccount.page";
import Overview from "../../Pages/overview.page";
import Signup from "../../Pages/signup.page";
import {
  CART_PAGE,
  CREATE_PRODUCT,
  LOGIN_PAGE,
  MY_ACCOUNT,
  OVERVIEW_PAGE,
  REGISTRATION_PAGE,
} from "./constants";

interface IRoute {
  routes: { path: string; element: () => JSX.Element }[];
}

const routeConfig: IRoute = {
  routes: [
    { path: REGISTRATION_PAGE, element: Signup },
    { path: OVERVIEW_PAGE, element: Overview },
    {
      path: LOGIN_PAGE,
      element: Login,
    },
    { path: CART_PAGE, element: MyCart },
    { path: CREATE_PRODUCT, element: createProduct },
    { path: MY_ACCOUNT, element: MyAccount },
  ],
};

export default routeConfig;
