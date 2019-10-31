import { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user: any = firebase.auth().currentUser;
    return { initializing: !user, user };
  });

  function onChange(user: any) {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return state;
};
