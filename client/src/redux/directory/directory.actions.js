import directoryActionTypes from "./directory.types";
import { firestore } from "../../utils/firebase";
const fetchDirectoryStart = () => ({
  type: directoryActionTypes.FETCH_DIRECTORY_START,
});

const fetchDirectorySuccess = (directory) => ({
  type: directoryActionTypes.FETCH_DIRECTORY_SUCCESS,
  payload: directory,
});

const fetchDirectoryFail = (error) => ({
  type: directoryActionTypes.FETCH_DIRECTORY_FAIL,
});

export const fetchDirectory = () => async (dispatch) => {
  try {
    dispatch(fetchDirectoryStart());
    const directoryRef = firestore.collection("directories");
    const snapshot = await directoryRef.get();
    const transformedDirectories = snapshot.docs.map((directory) => {
      const { title, imageUrl, linkUrl } = directory.data();
      return { title, imageUrl, linkUrl, id: directory.id };
    });
    dispatch(fetchDirectorySuccess(transformedDirectories));
  } catch (error) {
    dispatch(fetchDirectoryFail(error));
  }
};
