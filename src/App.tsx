import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import routeConfig from "./config/routes/routes";
import { getMeBeginAction } from "./config/store/actions/auth.actions";
import { AUTH_TOKEN } from "./config/store/apis/auth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem(AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(getMeBeginAction());
  });
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.routes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
