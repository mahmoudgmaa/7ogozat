import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {EntityKeys} from "../schema";
import * as thunks from "./thunks";
import * as actions from "./actions"
import selectors from './selectors';
import adapter from "./adapter";
import {TUser} from "./model";

type TInitialState = {
  current_user?: number;
};

const slice = createSlice({
  name: EntityKeys.BUSINESS_ADMIN,
  initialState:  adapter.getInitialState<TInitialState>({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(thunks.doSignin.fulfilled,
          thunks.doFetchSelf.fulfilled,
      ),
      (state: any, action) => {
        if (!action.payload) return;
        adapter.upsertMany(state, action.payload.data);
        state.current_user = action.payload?.data.business_admin.id;
        // adapter.upsertMany(state, action.payload.data);
        // state.current_user = action.payload?.data;

      }
    );
  },
});

const User = {
  actions,
  thunks,
  slice,
  selectors
};
export default User;
