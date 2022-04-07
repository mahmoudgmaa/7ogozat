import {createSlice} from '@reduxjs/toolkit';
import {doSetGeneralValue} from './actions';

export type TGeneralSlice = {
  fcmToken?: string;
};
const initialState: TGeneralSlice = {};

const generalSlice = createSlice({
  name: 'general_slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSetGeneralValue, (state, action) => {
      const {payload} = action;
      const {key, value} = payload;
      (state as any)[key as any] = value;
    });
  },
});

export default generalSlice;
