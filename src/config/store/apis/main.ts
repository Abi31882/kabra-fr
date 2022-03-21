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

export const addToCart = (
  productId: string,
  cartId: string,
  name: string,
  image: string,
  price: number,
  quantity: number
) => {
  const url = BASE_URL + "/product/" + productId + "/cart/" + cartId;

  return axios.post(
    url,
    {
      name: name,
      image: image,
      price: price,
      quantity: quantity,
      productID: productId,
    },
    { headers: { Authorization: token! } }
  );
};

export const updateQuantity = (
  productId: string,
  cartId: string,
  quantity: number
) => {
  const url = BASE_URL + "/product/" + productId + "/cart/" + cartId;

  return axios
    .patch(url, { quantity: quantity }, { headers: { Authorization: token! } })
    .then((r) => {
      window.location.href = "/cart";
    });
};

export const createProduct = (data: any) => {
  const form = new FormData();
  // console.log(form);
  form.append("name", data.name);
  form.append("image", data.image);
  form.append("description", data.description);
  form.append("price", data.price);
  form.append("quantity", data.quantity);

  // form.append("image", data);
  const url = BASE_URL + "/product/create";

  return axios({
    method: "POST",
    url: url,
    data: form,
    headers: {
      // Authorization: AUTH_TOKEN,
      "Content-type": "application/json",
      "Content-Type": "multipart/form-data",
    },
  })
    .then((r) => {
      console.log("product created successfully");
      window.location.href = "/";
    })
    .catch((e) => {
      alert(e.response.data);
    });
};
