const initialState = {
  total: 3,
  cost: 376000,
  list: [
    {
      id: 1,
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631219993-il_794xN.3140617889_tliu.jpg?crop=1xw:1.00xh;center,top&resize=768:*",
      title: "Paddle Plant",
      description:
        "The paddle plant is a bold succulent that has big, round leaves with pink tips. These plants favor bright light so you can have it sit right on a sunny windowsill to soak in all the rays. These also like to be on the drier side, so don’t worry if you forget to water from time to time — they can take it!",
      price: 95000,
      size: "L",
      quantity: 2,
    },
    {
      id: 3,
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631220346-il_794xN.2390259956_tknd.jpg?crop=1xw:1.00xh;center,top&resize=768:*",
      title: "String of Pearls",
      description:
        "Add this little guy to a shelf and watch it trail down. Make sure that you place it in bright, indirect sunlight and water every one to two weeks.",
      price: 186000,
      size: "S",
      quantity: 1,
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newList = [...state.list];
      let { id } = action.payload;
      const item = newList.filter((item) => item.id === id);
      if (item.length > 0) {
        newList.forEach((i) => {
          if (i.id === id) {
            i.quantity += action.payload.quantity;
          }
        });
      } else {
        newList.push(action.payload);
      }
      state.total += action.payload.quantity;
      return {
        ...state,
        list: newList,
      };
    }

    case "REMOVE_ITEM": {
      var newList = [...state.list];
      let { id } = action.payload;
      newList = newList.filter((item) => item.id !== id);
      state.total -= action.payload.quantity;
      return {
        ...state,
        list: newList,
      };
    }

    case "UPDATE_QUANTITY": {
      const { item, amount } = action.payload;
      var newList = [...state.list];
      var newCost;
      newList.forEach((i) => {
        if (i.id === item.id) {
          i.quantity += amount;
          newCost = state.cost + amount * item.price;
        }
      });
      state.total += amount;
      return {
        ...state,
        list: newList,
        cost: newCost,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
