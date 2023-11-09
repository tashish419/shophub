export const selectProducts = (store) => {
    console.log({ store });
    return store?.products;
  };
  
  export const selectCart = (store) => {
    console.log({ store });
    return store?.cart;
  };
  