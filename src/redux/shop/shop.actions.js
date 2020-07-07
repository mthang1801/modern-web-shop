import shopActionTypes from "./shop.types";

export const fetchCollections = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS,
  payload: collections,
});
