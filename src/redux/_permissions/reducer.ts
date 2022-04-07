import {doSetPermission} from '../_permissions/actions';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {};

const permissionsReducer = createReducer(initialState, {
  [doSetPermission.type]: (state: any, {payload: {key, value}}) => {
    state[key] = value;
  },
});

export default permissionsReducer;
