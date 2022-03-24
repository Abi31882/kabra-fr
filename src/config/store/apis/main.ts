import { endTheBar } from "../../loadingBarService";
import { Products } from "../interfaces";
import { AUTH_TOKEN } from "./auth";
import instance from "./base";

const token = localStorage.getItem(AUTH_TOKEN);

export const allProductsRequest = () => {
  return instance.get<Products[]>("/product");
};

export const myCart = () => {
  return instance.get("/cart/myCart", {
    headers: { Authorization: token! },
  });
};

export const createMyCart = async (user: string) => {
  return await instance.post(
    "/cart/create",
    { user: user },
    { headers: { Authorization: token! } }
  );
};

export const addToCart = async (
  productId: string,
  cartId: string,
  name: string,
  image: string,
  price: number,
  quantity: number
) => {
  return await instance.post(
    "/product/" + productId + "/cart/" + cartId,
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

export const updateQuantity = async (
  productId: string,
  cartId: string,
  quantity: number
) => {
  return await instance.patch(
    "/product/" + productId + "/cart/" + cartId,
    { quantity: quantity },
    { headers: { Authorization: token! } }
  );
};

export const createProduct = async (data: any) => {
  const form = new FormData();
  form.append("name", data.name);
  form.append("image", data.image);
  form.append("description", data.description);
  form.append("price", data.price);
  form.append("quantity", data.quantity);

  return await instance({
    method: "POST",
    url: "/product/create",
    data: form,
    headers: {
      "Content-type": "application/json",
      "Content-Type": "multipart/form-data",
    },
  })
    .then((r) => {
      console.log("product created successfully");
      endTheBar();
      window.location.href = "/";
    })
    .catch((e) => {
      alert(e.response.data);
      endTheBar();
    });
};
