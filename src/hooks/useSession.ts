import { useContext } from 'react';
import { userContext } from '../context/user.context';

export const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};
