import {
  IUserInfoData,
  UserAction,
  UserInfoActionType,
  UserState,
} from '../types/user-info';

export const initialUserInfoData: IUserInfoData = {
  id: '',
  name: '',
  surname: '',
  age: '',
  phone: '',
};

const { GET_USER_INFO, SET_USER, DELETE_USER, EDIT_USER } = UserInfoActionType;

export const userReducer = (
  state: UserState = { userData: [initialUserInfoData], error: '' },
  action: UserAction,
) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        userData: [...action.payload],
        error: state.error,
      };
    case SET_USER:
      return {
        userData: [...state.userData, action.payload],
        error: state.error,
      };
    case DELETE_USER:
      return {
        userData: action.payload,
        error: state.error,
      };
    case EDIT_USER:
      return {
        userData: [
          ...state.userData.filter((user) => user.id !== action.payload.id),
          action.payload,
        ],
        error: state.error,
      };
    default:
      return state;
  }
};
