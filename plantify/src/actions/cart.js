export const addItemToCart = (cart) => {
  return {
    type: "ADD_ITEM",
    payload: cart,
  };
};

export const removerItemFromCart = (cart) => {
  return {
    type: "REMOVE_ITEM",
    payload: cart,
  };
};
