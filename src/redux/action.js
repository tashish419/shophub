import { Action } from "./store";

export const saveProducts = (products) => ({
  type: Action.SAVE_PRODUCTS,
  payload: products
});

export const addProductInCart = (product) => ({
  type: Action.SAVE_PRODUCTS,
  payload: product
});
