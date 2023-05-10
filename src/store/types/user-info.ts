export interface IUserInfoData {
  id: string;
  name: string;
  surname: string;
  age: string;
  phone: string;
}

export interface UserState {
  userData: IUserInfoData[];
  error?: string | null;
}

export enum UserInfoActionType {
  GET_USER_INFO = 'GET_USER_INFO',
  SET_USER = 'SET_USER',
  DELETE_USER = ' DELETE_USER',
  EDIT_USER = 'EDIT_USER',
  SET_LOADING = 'SET_LOADING',
}
interface GetUserInfoAction {
  type: UserInfoActionType.GET_USER_INFO;
  payload: IUserInfoData[];
}

interface SetUserAction {
  type: UserInfoActionType.SET_USER;
  payload: IUserInfoData;
}

interface DeleteUserAction {
  type: UserInfoActionType.DELETE_USER;
  payload: IUserInfoData[];
}

interface EditUserAction {
  type: UserInfoActionType.EDIT_USER;
  payload: IUserInfoData;
}

export type UserAction =
  | GetUserInfoAction
  | SetUserAction
  | DeleteUserAction
  | EditUserAction;
