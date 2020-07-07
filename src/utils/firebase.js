import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsiG7yWbuhZbw-eqOJyGRWQFzB-2jZ99s",
  authDomain: "modern-web-shop.firebaseapp.com",
  databaseURL: "https://modern-web-shop.firebaseio.com",
  projectId: "modern-web-shop",
  storageBucket: "modern-web-shop.appspot.com",
  messagingSenderId: "71737801071",
  appId: "1:71737801071:web:302be037cce60b8536109a",
  measurementId: "G-HRY216SVD0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//Google Authentication Provider
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt : "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
//Facebook Authentication Provider
const FacebookProvider = new firebase.auth.FacebookAuthProvider();
FacebookProvider.setCustomParameters({})
FacebookProvider.addScope("email")
export const signInWithFacebook = () => auth.signInWithPopup(FacebookProvider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth){
    return null; 
  }
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData,
        createdAt : new Date()
      })
    } catch (error) {
      console.log("Error creating user", error)
    }
  }
  return userRef;
}

export const signUpAccount =async (displayName, email, password) => {
  try {
    const {user} = await auth.createUserWithEmailAndPassword(email, password)
    await createUserProfileDocument(user , {displayName});    
  } catch (error) {
    console.log(error);
  }
}

export const addCollectionsAndItems = async (collectionKey, objToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })
  await batch.commit();
}

export default firebase;