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
    case "ADD_INGREDIENT":
      return {
        ...state,
        products: {
          ...state.products,
          [action.product]: state.products[action.product] + 1
        },
        price: state.price + action.information[action.product].price
      };

    case "REMOVE_INGREDIENT":
      const newState = { ...state };
      newState.products = { ...state.products };
      newState.products[action.product] = state.products[action.product] - 1;
      newState.price = state.price - action.information[action.product].price;

      return newState;

    default:
      return {
        ...state
      };
  }
};

export default reducer;
