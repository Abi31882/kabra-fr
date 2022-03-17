import axios from "axios";
import { Products } from "../interfaces";
import { BASE_URL } from "./auth";

export const allProductsRequest = () => {
  const url = BASE_URL + "/product";

  return axios.get<Products[]>(url);
};
