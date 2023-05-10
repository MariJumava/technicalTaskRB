export enum AuthActionType {
  SET_AUTH = 'SET_AUTH',
}

export interface LoginUserData {
  login: string;
  password: string;
}
export interface AuthUser {
  id: string;
  token: string;
  login: string;
}
export interface UserState {
  authUser: AuthUser | null;
  isAuth: boolean;
}

interface SetAuthAction {
  type: AuthActionType.SET_AUTH;
  payload: AuthUser | null;
}

export type AuthAction = SetAuthAction;
