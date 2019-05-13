const initialState = {
  itemsCart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        itemsCart: action.value
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
