import { createContext } from 'react';
import firebase from 'firebase';

interface UserContext {
  user?: firebase.User;
  initializing?: boolean;
}

export const userContext = createContext<UserContext>({
  user: undefined,
  initializing: true
});
