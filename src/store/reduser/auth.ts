import { AuthAction, AuthActionType, UserState } from '../types/auth';

export const authReducer = (
  state: UserState = { isAuth: false, authUser: null },
  action: AuthAction,
) => {
  switch (action.type) {
    case AuthActionType.SET_AUTH:
      return {
        authUser: action.payload,
        isAuth: action.payload !== null,
      };
    default:
      return state;
  }
};
