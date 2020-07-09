import shopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  loading: true,
  error: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        loading: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        loading: false,
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        collections: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
