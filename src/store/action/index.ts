import * as UserActionCreators from '../action/user-info';
import * as AuthActionCreators from '../action/auth';

export default {
  ...UserActionCreators,
  ...AuthActionCreators,
};
