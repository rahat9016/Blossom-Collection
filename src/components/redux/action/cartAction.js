export const addToCartList = (payload) => {
    return {
      type: "ADD_TO_CART_LIST",
      payload: payload,
      
    };
  };
  export const removeFromCartList = (payload) => {
    return {
      type: "REMOVE_FROM_CART_LIST",
      payload: payload,
    };
  };
  