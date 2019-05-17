const initialState = {
  products: {
    product1: {},
    product2: {},
    product3: {}
  },
  price: 0,
  itemsCart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        itemsCart: action.value
      };
    case "PRICE":
      return {
        ...state,
        price: action.value
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
