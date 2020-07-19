import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import gravatar from "gravatar";

const firebaseConfig = {
  apiKey: "AIzaSyBsiG7yWbuhZbw-eqOJyGRWQFzB-2jZ99s",
  authDomain: "modern-web-shop.firebaseapp.com",
  databaseURL: "https://modern-web-shop.firebaseio.com",
  projectId: "modern-web-shop",
  storageBucket: "modern-web-shop.appspot.com",
  messagingSenderId: "71737801071",
  appId: "1:71737801071:web:302be037cce60b8536109a",
  measurementId: "G-HRY216SVD0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//Google Authentication Provider
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
//Facebook Authentication Provider
const FacebookProvider = new firebase.auth.FacebookAuthProvider();
FacebookProvider.setCustomParameters({});
FacebookProvider.addScope("email");
export const signInWithFacebook = () => auth.signInWithPopup(FacebookProvider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return null;
  }
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, imageUrl } = userAuth;
    try {
      await userRef.set({
        displayName,
        email,
        imageUrl: imageUrl
          ? imageUrl
          : gravatar.url(email, { protocol: "https" }),
        ...additionalData,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }
  return userRef;
};

export const signUpAccount = async (displayName, email, password) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user, { displayName });
  } catch (error) {
    console.log(error);
  }
};

export const addCollectionsAndItems = async (collectionKey, objToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.map((collectionItem) => {
    const { title, items } = collectionItem.data();
    return {
      id: collectionItem.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.routeName] = { ...collection };
    return accumulator;
  }, {});
};

export const getCollections = async () => {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot = await collectionsRef.get();
    return convertCollectionsSnapshotToMap(snapshot.docs);
  } catch (error) {
    console.log(error);
  }
};

export const addCartItemsToOrderedList = async (cartItems, totalPrice) => {
  try {
    const orderedByUser = {
      cartItems,
      totalPrice,
      userId: auth.currentUser.uid,
      createdAt: new Date(),
    };
    const orderedRef = await firestore.collection("ordered").add(orderedByUser);

    console.log(orderedRef);
  } catch (error) {
    console.log(error);
  }
};

export const resetAccount = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await auth.sendPasswordResetEmail(email);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export default firebase;
