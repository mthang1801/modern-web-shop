import cardPersonActionTypes from "./card-person.types";

export const setCardPersonOpen = () => ({
  type: cardPersonActionTypes.SET_CARD_PERSON_OPEN,
});
export const setCardPersonClose = () => ({
  type: cardPersonActionTypes.SET_CARD_PERSON_CLOSE,
});
export const setCardPersonToggle = () => ({
  type: cardPersonActionTypes.SET_CARD_PERSON_TOGGLE,
});
