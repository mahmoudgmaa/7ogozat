import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';

type TSelector = (state: RootState) => any;
const useTypedSelector = (getterFunction: TSelector) => {
  return useSelector(getterFunction);
};

export default useTypedSelector;
