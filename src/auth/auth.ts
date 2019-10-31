import * as firebase from 'firebase/app';
import 'firebase/auth';

export const loginWithEmail = async (email: any, password: any) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createUserWithEmail = async (email: any, password: any) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const signOut = () => firebase.auth().signOut();
