const initialState = {
  userList: [],
  userDetails: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return {
        ...state,
        userList: action.payload,
      };
    case "SET_USER_DETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
