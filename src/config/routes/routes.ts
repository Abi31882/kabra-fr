import MyCart from "../../Pages/cart.page";
import createProduct from "../../Pages/createProduct.page";
import Login from "../../Pages/login.page";
import Overview from "../../Pages/overview.page";
import Signup from "../../Pages/signup.page";
import {
  CART_PAGE,
  CREATE_PRODUCT,
  LOGIN_PAGE,
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
  ],
};

export default routeConfig;
