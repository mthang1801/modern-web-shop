import { createSelector } from "reselect";

const selectCardPerson = (state) => state.cardPerson;

export const selectShowCardPerson = createSelector(
  selectCardPerson,
  (cardPerson) => cardPerson.showCardPerson
);
