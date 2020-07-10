import directoryActionTypes from "./directory.types";

const INITIAL_STATE = {
  directories: [],
  loading: false,
  error: null,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case directoryActionTypes.FETCH_DIRECTORY_START:
      return {
        ...state,
        loading: true,
      };
    case directoryActionTypes.FETCH_DIRECTORY_SUCCESS:
      return {
        ...state,
        directories: action.payload,
        loading: false,
        error: null,
      };
    case directoryActionTypes.FETCH_DIRECTORY_FAIL:
      return {
        ...state,
        directories: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default directoryReducer;
