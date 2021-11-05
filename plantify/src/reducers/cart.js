const initialState = {
  total: 3,
  list: [
    {
      id: 1,
      img: "https://www.costafarms.com/images/SlideShow/Croton-Popular-Houseplants-Cota-Farms.jpg",
      title: "PEPEROMIA WATERMELON",
      size: "L",
      price: 40000,
      quantity: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    },
    {
      id: 2,
      img: "https://www.costafarms.com/images/SlideShow/Dracaena-Popular-Houseplants-Costa-Farms.jpg",
      title: "PPEROMIA APPLE",
      size: "S",
      price: 30000,
      quantity: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return state;
    }

    case "REMOVE_ITEM": {
      return state;
    }

    default:
      return state;
  }
};

export default cartReducer;
