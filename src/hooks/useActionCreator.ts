import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../store/action/index';

export const useActionCreator = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
