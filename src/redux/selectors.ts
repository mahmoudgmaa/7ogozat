import {AsyncThunk} from '@reduxjs/toolkit';
import useTypedSelector from '../hooks/useTypedSelector';
import {TGeneralSlice} from './_general/reducer';
import {TCheckupKeys} from "./constants";

/**
 * Selector hooking to the store retrieving corresponding loading state for a certain action
 * @param {AsyncThunk<any, any, any>} action action created using `createAsynThunk`
 * @returns {boolean} loading state for this specific action
 */
const useLoadingSelector = (action: AsyncThunk<any, any, any>) => {
  const {typePrefix} = action;
  return useTypedSelector((state) => state._loading[typePrefix]) || false;
};

/**
 * Selector hooking to the store retrieving corresponding error state for a certain action
 * @param {AsyncThunk<any, any, any>} action action created using `createAsynThunk`
 * @returns {boolean} error state for this specific action
 */
const useErrorsSelector = (action: AsyncThunk<any, any, any>) => {
  const {typePrefix} = action;
  return useTypedSelector((state) => state._errors[typePrefix]) || {};
};

/**
 *
 * @param {AsyncThunk<any, any, any>} action action created using `createAsynThunk`
 * @returns {boolean} error state for this specific action
 */
const useCheckupSelector = (action: keyof TCheckupKeys) =>
  useTypedSelector((state) => state._checkups[action]);

/**
 * Selector for the general surveillance.
 * @returns {AppStateStatus} string representing the current app state status
 */
const useGeneralSelector = (key: keyof TGeneralSlice) => {
  return useTypedSelector((state) => state._general[key]);
};

export {
  useErrorsSelector,
  useLoadingSelector,
  useCheckupSelector,
  useGeneralSelector,
};
