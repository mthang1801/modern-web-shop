import shopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../utils/firebase";
export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFail = (error) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: error,
});

export const fetchCollections = (collections) => async (dispatch) => {
  try {
    dispatch(fetchCollectionsStart());
    const collectionsRef = firestore.collection("collections");
    const snapshop = await collectionsRef.get();
    const collections = convertCollectionsSnapshotToMap(snapshop.docs);
    dispatch(fetchCollectionsSuccess(collections));
  } catch (error) {
    dispatch(fetchCollectionsFail(error.message));
  }
};
