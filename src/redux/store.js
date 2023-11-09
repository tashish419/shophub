import { createStore } from "redux";

export const Action = {
  SAVE_PRODUCTS: "SAVE_PRODUCTS",
  ADD_PRODUCT_CART: "ADD_PRODUCT_CART",
  LOGIN: "LOGIN",
  DELETE: "DELETE"
};

const initialState = {
  isLoggedIn: false,
  token: "",
  products: [],
  cart: []
};

const appReducer = (state = initialState, payload) => {
  console.log({ payload });
  switch (payload.type) {
    case Action.SAVE_PRODUCTS:
      return {
        ...state,
        products: payload.products
      };
    case Action.ADD_PRODUCT_CART:
      return {
        ...state,
        cart: [...state.cart, payload.product]
      };
    case Action.LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case Action.DELETE:
      return {
        ...state,
        cart: state.cart.filter((_, i) => i != payload.index)
      };
    default:
      return state;
  }
};

export default createStore(appReducer);
