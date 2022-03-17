import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../config/store";
import { getAllProductBeginAction } from "../config/store/actions/product.actions";
import { allproductsSelector } from "../config/store/selectors/product.selectors";
import "./css/overview.css";

export const Overview = () => {
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
