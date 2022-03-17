import Login from "../../Pages/login.page";
import Overview from "../../Pages/overview.page";
import Signup from "../../Pages/signup.page";
import { LOGIN_PAGE, OVERVIEW_PAGE, REGISTRATION_PAGE } from "./constants";

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
  ],
};

export default routeConfig;
