import cardPersonActionTypes from "./card-person.types";

const INITIAL_STATE = {
  showCardPerson: false,
};

const cardPersonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cardPersonActionTypes.SET_CARD_PERSON_OPEN:
      return {
        ...state,
        showCardPerson: true,
      };
    case cardPersonActionTypes.SET_CARD_PERSON_CLOSE:
      return {
        ...state,
        showCardPerson: false,
      };
    case cardPersonActionTypes.SET_CARD_PERSON_TOGGLE:
      return {
        ...state,
        showCardPerson: !state.showCardPerson,
      };
    default:
      return state;
  }
};

export default cardPersonReducer;
