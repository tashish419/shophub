import React, { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Action, saveProducts, store } from "./redux/store";
import { selectProducts, useSelectProducts } from "./redux/selector";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [selectedProduct, selectProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: Action.SAVE_PRODUCTS,
          products: json
        });
      });
  }, []);

  const addToCart = (product) => {
    dispatch({
      type: Action.ADD_PRODUCT_CART,
      product
    });
    selectProduct(null);
    alert("Product Added To Cart");
  };

  return (
    <div>
      <div className="container">
        {selectedProduct && (
          <div className="product-details-card">
            <div className="product-detail-left-container">
              <div className="product-details-name">
                <p>{selectedProduct?.title}</p>
              </div>
              <div className="product-details-description">
                <p>{selectedProduct?.description}</p>
              </div>
              <div className="product-image-thumbnails">
                <div className="product-image-thumbnail">
                  <img
                    src={selectedProduct.image}
                    width="95"
                    height="40"
                    alt="thumbnails"
                  />
                </div>
                <div className="product-image-thumbnail">
                  <img
                    src={selectedProduct.image}
                    width="95"
                    height="40"
                    alt="thumbnails"
                  />
                </div>
                <div className="product-image-thumbnail">
                  <img
                    src={selectedProduct.image}
                    width="95"
                    height="40"
                    alt="thumbnails"
                  />
                </div>
              </div>
            </div>
            <div className="product-detail-middle-container">
              <div className="product-image-gallery">
                <img
                  src={selectedProduct.image}
                  width="265"
                  height="111"
                  alt="product-gallery"
                />
              </div>
              <div className="product-detail-price">
                <span>{selectedProduct.price}</span>
              </div>
            </div>
            <div className="product-detail-right-container">
              <span className="review-heading">Reviews:</span>
              <div className="product-detail-ratings">
                <span className="rating-star">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </span>
                <span className="rating-star">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </span>
                <span className="rating-star">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </span>
                <span className="rating-star">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </span>
                <span className="rating-star">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star-half-alt"
                    className="svg-inline--fa fa-star-half-alt fa-w-17 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 536 512"
                  >
                    <path
                      fill="currentColor"
                      d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                    ></path>
                  </svg>
                </span>
                <span className="reviews-count">
                  {selectProduct?.rating?.rate}({selectProduct?.rating?.count})
                </span>
              </div>
              <div className="product-detail-color">
                <span>Select Color:</span>
                <div className="shoe-colors">
                  <label for="color0">
                    <input
                      type="radio"
                      id="color0"
                      name="color"
                      value="#1e1e1e"
                    />
                    <div
                      className="colors"
                      style={{ background: "rgb(30, 30, 30)" }}
                    ></div>
                  </label>
                  <label for="color1">
                    <input
                      type="radio"
                      id="color1"
                      name="color"
                      value="#f0969e"
                    />
                    <div
                      className="colors"
                      style={{ background: "rgb(240, 150, 158)" }}
                    ></div>
                  </label>
                  <label for="color2">
                    <input
                      type="radio"
                      id="color2"
                      name="color"
                      value="#d5d5d4"
                    />
                    <div
                      className="colors"
                      style={{ background: "rgb(213, 213, 212)" }}
                    ></div>
                  </label>
                  <label for="color3">
                    <input
                      type="radio"
                      id="color3"
                      name="color"
                      value="#cb141a"
                    />
                    <div
                      className="colors"
                      style={{ background: "rgb(203, 20, 26)" }}
                    ></div>
                  </label>
                </div>
              </div>
              <div className="product-detail-size">
                <span>Select Size:</span>
                <div className="sizes">
                  <label for="size0">
                    <input type="radio" id="size0" name="size" value="41" />
                    <div className="size-box">41</div>
                  </label>
                  <label for="size1">
                    <input type="radio" id="size1" name="size" value="42" />
                    <div className="size-box">42</div>
                  </label>
                  <label for="size2">
                    <input type="radio" id="size2" name="size" value="43" />
                    <div className="size-box">43</div>
                  </label>
                  <label for="size3">
                    <input type="radio" id="size3" name="size" value="44" />
                    <div className="size-box">44</div>
                  </label>
                  <label for="size4">
                    <input type="radio" id="size4" name="size" value="45" />
                    <div className="size-box">45</div>
                  </label>
                </div>
              </div>
              <div className="product-detail-add-to-cart-btn">
                <button
                  disabled=""
                  onClick={() => {
                    addToCart(selectedProduct);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          {products.map((product) => (
            <div
              className="product-box col-md-3"
              onClick={() => {
                selectProduct(product);
              }}
            >
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
                >
                  {/* <img src={product.image} height="100" width="100" /> */}
                </div>
                <div className="product-imitation">{product.title}</div>
                <div className="product-desc">
                  <span className="product-price">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
