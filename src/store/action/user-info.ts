import { Dispatch } from 'react';
import axios from 'axios';
import { UserAction, UserInfoActionType } from '../types/user-info';
import { showNotification } from '../../util/Notification';

const { GET_USER_INFO, SET_USER, DELETE_USER, EDIT_USER } = UserInfoActionType;

export const getUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data } = await axios.get('http://localhost:3333/clients');
      const clients = data.clients;
      dispatch({ type: GET_USER_INFO, payload: clients });
    } catch (err) {
      showNotification(false, 'Ooops...', 'Something went wrong!');
      console.log(err);
    }
  };
};

export const setUser = (userData: any) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post(
        'http://localhost:3333/clients/add',
        userData,
        { headers: { Authorization: userData?.token } },
      );
      dispatch({ type: SET_USER, payload: response.data.client });
      showNotification(true, 'New client was added successfully', '');
    } catch (err) {
      showNotification(false, 'Ooops...', 'Something went wrong!');
      console.log(err);
    }
  };
};

export const deleteUser = (userData: any) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.delete(
        `http://localhost:3333/clients/remove?id=${userData.id}`,
        {
          headers: { Authorization: userData?.token },
        },
      );
      dispatch({ type: DELETE_USER, payload: response.data.clients });
      showNotification(true, 'Client was deleted successfully', '');
    } catch (err) {
      showNotification(false, 'Ooops...', 'Something went wrong!');
      console.log(err);
    }
  };
};

export const editUser = (userData: any) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.put(
        `http://localhost:3333/clients/edit`,
        {
          id: userData?.id,
          name: userData.name,
          surname: userData.surname,
          age: userData.age,
          phone: userData.phone,
        },
        { headers: { Authorization: userData?.token } },
      );
      dispatch({ type: EDIT_USER, payload: response.data.client });
      showNotification(true, 'Client was edited successfully', '');
    } catch (err) {
      showNotification(false, 'Ooops...', 'Something went wrong!');
      console.log(err);
    }
  };
};
