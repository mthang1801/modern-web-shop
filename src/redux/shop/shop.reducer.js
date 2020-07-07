import shopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  loading: true,
  error: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
