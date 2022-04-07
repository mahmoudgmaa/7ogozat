import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {doSetCheckup} from '../../redux/_checkup/actions';

/**
 * Hook exposes a couple of functions that help synchronize the values of checkups among the store and the AsyncStorage.
 * Function `setCheckup`: to update the value of a certain checkup in the store and the AsyncStorage accordingly
 * Function `resetCheckup`: to reset the value of a certain checkup in the store and the AsyncStorage
 * @returns the awaited functions to offer synchronizations
 * @example
 * ```ts
 * const {setCheckup, resetCheckup} = useCheckupSetter();
 *
 * setCheckup(CheckupKeys.<value>, value);
 *
 * resetCheckup(CheckupKeys.<value>);
 * ```
 */
const useCheckupSetter = () => {
  const dispatch = useDispatch();
  const setCheckup = useCallback(
    (key: string, value: any) => {
      dispatch(doSetCheckup({key, value}));
      if (value) window.localStorage.setItem(key, value);
    },
    [dispatch],
  );
  const resetCheckup = useCallback(
    (key: string) => {
      dispatch(doSetCheckup({key, value: null}));
        window.localStorage.removeItem(key);
    },
    [dispatch],
  );

  return {setCheckup, resetCheckup};
};
export default useCheckupSetter;
