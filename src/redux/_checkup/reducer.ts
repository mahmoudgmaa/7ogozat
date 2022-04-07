import {CheckupKeys, TCheckupKeys} from '../constants';
import Users from '../user';
import {doSetCheckup} from '../_checkup/actions';
import {createReducer} from '@reduxjs/toolkit';

const initialState: Partial<TCheckupKeys> = {};

type TAction = {
  payload: {
    key: keyof TCheckupKeys;
    value: string | null;
  };
};

const checkupReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Users.actions.doSignout, (state) => {
      state[CheckupKeys.USER_TOKEN] = null;
      state[CheckupKeys.CLIENT_TOKEN] = null;
      state[CheckupKeys.UID_TOKEN] = null;
    })
    .addCase(Users.thunks.doSignin.fulfilled, (state, {payload: {headers}}) => {
      const {token, client, uid} = headers;
      state[CheckupKeys.USER_TOKEN] = token;
      state[CheckupKeys.CLIENT_TOKEN] = client;
      state[CheckupKeys.UID_TOKEN] = uid;
    })
    .addCase(doSetCheckup, (state, {payload: {key, value}}: TAction) => {
      state[key] = value;
    });
});

export default checkupReducer;
