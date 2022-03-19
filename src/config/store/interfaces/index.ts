export interface LoginRequest {
  userName: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  token: string;
  doc: User;
}

export interface User {
  _id?: string;
  userName?: string;
}

export interface SignupRequest {
  userName: string;
  password: string;
}

export interface SignupResponse {
  status: string;
  token: string;
  doc: User;
}

export interface MeResponse {
  status: string;
  doc: User;
}

export interface Products {
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  id: string;
}

export interface Cart {
  id: string;
  user: string;
  product: {
    name: string;
    price: number;
    quantity: number;
    image: string;
    _id: string;
  }[];
}

export interface NewCart {
  product: [];
  user: "";
  id: "";
}
