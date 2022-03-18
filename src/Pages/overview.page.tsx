import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../config/store";
import {
  addproductToCartBeginAction,
  createCartBeginAction,
  getAllProductBeginAction,
} from "../config/store/actions/product.actions";
import { logout } from "../config/store/apis/auth";
import { userIdSelector } from "../config/store/selectors/auth.selectors";
import { cartIdSelector } from "../config/store/selectors/cart.selectors";
import { allproductsSelector } from "../config/store/selectors/product.selectors";
import "./css/overview.css";

export const Overview = () => {
  const user = useAppSelector(userIdSelector);
  const cart = useAppSelector(cartIdSelector);
  const products = useAppSelector(allproductsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductBeginAction());
  }, []);

  return (
    <section className="section-products">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <h2>Popular Products</h2>
            </div>
          </div>
          {user && (
            <div onClick={logout}>
              <button>Logout</button>
            </div>
          )}
          {user && (
            <Link to="/cart">
              <button>My Cart</button>
            </Link>
          )}
        </div>
        <div className="row">
          {products.map((p) => (
            <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
              <div id="product-1" className="single-product">
                <div className="part-1">
                  <img className="part-1" src={p.image} />
                </div>
                <div className="part-2">
                  <h3 className="product-title">{p.name}</h3>
                  <h4 className="product-price">₹ {p.price}</h4>
                  <h4 className="product-price">{p.description}</h4>
                </div>
                {user ? (
                  cart ? (
                    <div className="add-button">
                      <button
                        onClick={() => {
                          dispatch(addproductToCartBeginAction(p.id, cart));
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  ) : (
                    <div className="add-button">
                      <button
                        onClick={() => {
                          dispatch(createCartBeginAction(user));
                        }}
                      >
                        Create my cart
                      </button>
                    </div>
                  )
                ) : (
                  <div className="add-button">
                    <Link to="/login">
                      <button>Add to cart</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
