import { useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeConfig from "./routes";
import { getMeBeginAction } from "../store/actions/auth.actions";
import { AUTH_TOKEN } from "../store/apis/auth";
import { useDispatch } from "react-redux";
import { getCartBeginAction } from "../store/actions/product.actions";

const Router = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem(AUTH_TOKEN);
  useEffect(() => {
    dispatch(getMeBeginAction());
    dispatch(getCartBeginAction());
  }, [token]);
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.routes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
