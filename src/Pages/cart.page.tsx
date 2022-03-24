import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../config/store";
import {
  getCartBeginAction,
  updateQuantityBeginAction,
} from "../config/store/actions/product.actions";
import {
  cartIdSelector,
  cartProductsSelector,
} from "../config/store/selectors/cart.selectors";
import "./css/cart.css";
const MyCart = () => {
  const dispatch = useDispatch();
  const cartProducts = useAppSelector(cartProductsSelector);
  const cartId = useAppSelector(cartIdSelector);
  const myArr = cartProducts.map((p) => p.price * p.quantity);
  const reducer = (accumulator: number, curr: number) => accumulator + curr;

  return (
    <div className="cart_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">
                Shopping Cart
                <small> ({cartProducts.length} item in your cart) </small>
              </div>
              {cartProducts.map((p) => (
                <div className="cart_items">
                  <ul className="cart_list">
                    <li className="cart_item clearfix">
                      <div className="cart_item_image">
                        <img src={p.image} alt="non" />
                      </div>
                      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                          <div className="cart_item_title">Name</div>
                          <div className="cart_item_text">{p.name}</div>
                        </div>
                        <div className=" cart_item_quantity cart_info_col">
                          <div className="cart_item_title">Quantity</div>
                          <div className="quantity">
                            <div
                              onClick={() => {
                                dispatch(
                                  updateQuantityBeginAction(
                                    p.productID,
                                    cartId,
                                    p.quantity - 1
                                  )
                                );
                              }}
                              className="quantity-item"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="16"
                                fill="currentColor"
                                className="bi bi-dash-lg"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                                />
                              </svg>
                            </div>
                            <div className="quantity-item">{p.quantity}</div>
                            <div
                              onClick={() => {
                                dispatch(
                                  updateQuantityBeginAction(
                                    p.productID,
                                    cartId,
                                    p.quantity + 1
                                  )
                                );
                                dispatch(getCartBeginAction());
                              }}
                              className="quantity-item"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-plus"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                          <div className="cart_item_title">Price</div>
                          <div className="cart_item_text">
                            ₹ {p.price * p.quantity}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}

              <div className="order_total">
                <div className="order_total_content text-md-right">
                  <div className="order_total_title">Order Total:</div>
                  <div className="order_total_amount">
                    ₹ {myArr.reduce(reducer, 0)}
                  </div>
                </div>
              </div>
              <div className="cart_buttons">
                {" "}
                <Link to="/" type="button" className="button cart_button_clear">
                  Continue Shopping
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
