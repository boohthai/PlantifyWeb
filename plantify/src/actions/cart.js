export const addItemToCart = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};

export const updateTotalCost = (amount) => {
  return {
    type: "UPDATE_COST",
    payload: amount,
  };
};

export const updateItemQuantity = (item, amount) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: { item: item, amount: amount },
  };
};
