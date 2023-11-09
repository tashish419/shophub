import React, { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { selectCart } from "./redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "./redux/store";

function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector(selectCart);

  return (
    <div>
      <div className="container">
        <h1>Cart Items</h1>
        <div className="row">
          {carts.map((product, index) => (
            <div className="product-box col-md-3">
              <div className="ibox">
                <div
                  className="ibox-content product-box"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: "80%",
                    height: "180px"
                  }}
                ></div>
                <div className="product-imitation">{product.title}</div>
                <div className="product-desc">
                  <span className="product-price">${product.price}</span>
                </div>
                <button
                  onClick={() => {
                    dispatch({
                      type: Action.DELETE,
                      index
                    });
                  }}
                  className="btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Cart;
