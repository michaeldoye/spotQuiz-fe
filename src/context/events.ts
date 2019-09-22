import { SPQ_SESSION_STORAGE, remove, save } from '../helpers/session-storage';

const actions = {
  login: 'login',
  logout: 'logout'
  // saveApplication: "saveApplication"
};

export const events = (action: any, state: any, params: any) => {
  switch (action) {
    case actions.login:
      save(SPQ_SESSION_STORAGE.TOKEN, params.token, false);
      return { ...state, token: params.token };
    case actions.logout:
      remove(SPQ_SESSION_STORAGE.TOKEN);
      return { ...state, login: false };
    // case actions.saveApplication:
    //   save(SPQ_SESSION_STORAGE.APPLICATION, params.application);
    //   return { ...state, application: params.application };
    default:
      return { state };
  }
};
