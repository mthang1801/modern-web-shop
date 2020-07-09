import shopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionFail = (error) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: error,
});
