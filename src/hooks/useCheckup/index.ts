import useCheckupSetter from './useCheckupSetter';
import {unwrapResult} from '@reduxjs/toolkit';
import {useCallback, useEffect, useState} from 'react';
import {useCheckupSelector} from '../../redux/selectors';
import {useAppDispatch} from '../../redux/store';
import Users from '../../redux/user';
import {useSelector} from 'react-redux';
import {CheckupKeys} from "../../redux/constants";

/**
 * Hook that offers monitoring for the list of `CheckupKeys` that maps to certain values stored within the AsyncStorage, all values are aligned within a reducer `_checkups`
 * accessed by `state._checkups` keyed by the title of each permission delegate.
 */
const useCheckup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatchApp = useAppDispatch();
  const {setCheckup, resetCheckup} = useCheckupSetter();
  const valueUserToken = useCheckupSelector(CheckupKeys.USER_TOKEN);
  const currentUser = useSelector(Users.selectors.currentUser);
  useEffect(() => {
    const checkCheckupKeys = async () => {
      const storedValues=[] ;
      for (let key in CheckupKeys){
        let token = await localStorage.getItem(CheckupKeys.USER_TOKEN)
        let client = await localStorage.getItem(CheckupKeys.CLIENT_TOKEN)
        let uid = await localStorage.getItem(CheckupKeys.UID_TOKEN)
        storedValues.push([CheckupKeys.USER_TOKEN,token])
        storedValues.push([CheckupKeys.CLIENT_TOKEN,client])
        storedValues.push([CheckupKeys.UID_TOKEN,uid])
        console.log(token)
      }
      storedValues.forEach(([paramKey, paramValue]:any) =>
        setCheckup(paramKey, paramValue),
      );
    };

    checkCheckupKeys();
  }, [setCheckup]);

  const fetchUserSelf = useCallback(
    () =>
      dispatchApp(Users.thunks.doFetchSelf({}))
        .then(unwrapResult)
        .then(() => setIsLoading(false))
        .catch((error: any) => {
            resetCheckup(CheckupKeys.USER_TOKEN);
            resetCheckup(CheckupKeys.CLIENT_TOKEN);
            resetCheckup(CheckupKeys.UID_TOKEN);

          setIsLoading(false);
        }),
    [dispatchApp, resetCheckup],
  );

  useEffect(() => {
    if (valueUserToken !== undefined) {
      if (valueUserToken && !currentUser) fetchUserSelf();
      else setIsLoading(false);
    }
  }, [currentUser, fetchUserSelf, valueUserToken]);

  return {
    isLoading,
  };
};

export default useCheckup;
