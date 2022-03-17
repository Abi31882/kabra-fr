import axios from "axios";
import { Products } from "../interfaces";
import { AUTH_TOKEN, BASE_URL } from "./auth";

const token = localStorage.getItem(AUTH_TOKEN);

export const allProductsRequest = () => {
  const url = BASE_URL + "/product";

  return axios.get<Products[]>(url);
};

export const myCart = () => {
  const url = BASE_URL + "/cart/myCart";

  return axios.get(url, { headers: { Authorization: token! } });
};

export const createMyCart = (user: string) => {
  const url = BASE_URL + "/cart/create";
  console.log(user);

  return axios.post(
    url,
    { user: user },
    { headers: { Authorization: token! } }
  );
};
