import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { EntityKeys } from "../schema";
import * as thunks from "./thunks";
import * as actions from "./actions";
import selectors from "./selectors";
import adapter from "./adapter";


type TInitialState = {

};

const slice = createSlice({
  name: EntityKeys.RESOURCES,
  initialState: adapter.getInitialState<TInitialState>({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        thunks.doCreateResource.fulfilled,
        thunks.doUpdateResource.fulfilled,
        thunks.doFetchResource.fulfilled
      ),
      (state: any, action) => {
        if (!action.payload) return;
        console.log("redux resource state ");
        console.log(state);
        adapter.upsertMany(state, action.payload.data);
      }
    );
  },
});

const Business = {
  actions,
  thunks: thunks,
  slice,
  selectors,
};
export default Business;
