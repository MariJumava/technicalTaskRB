import { Dispatch } from 'redux';
import axios from 'axios';
import { AuthAction, AuthActionType, LoginUserData } from '../types/auth';
import { showNotification } from '../../util/Notification';

export const setAuth = (data: LoginUserData) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await axios.post(
        'http://localhost:3333/user/login',
        data,
      );
      if (response.status === 200)
        dispatch({ type: AuthActionType.SET_AUTH, payload: response.data });
      showNotification(true, 'You have successfully logged in', '');
    } catch (err) {
      showNotification(false, 'Ooops...', 'Something went wrong!');
      console.log(err);
    }
  };
};
export const logout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionType.SET_AUTH, payload: null });
      showNotification(true, 'You have successfully logged out', '');
    } catch (err) {
      showNotification(false, 'Something went wrong!', '');
      console.log(err);
    }
  };
};
