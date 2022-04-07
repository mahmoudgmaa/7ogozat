import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {EntityKeys} from "../schema";
import * as thunks from "./thunks";
import * as actions from "./actions"
import selectors from './selectors';
import adapter from "./adapter";

type TInitialState = {
  current_user?: number;
};

const slice = createSlice({
  name: EntityKeys.CATEGORIES,
  initialState:  adapter.getInitialState<TInitialState>({}),
  reducers: {},
  extraReducers: (builder) => {
    // builder.addMatcher(
    //   isAnyOf(thunks.doCreateCategory.fulfilled,
    //       thunks.doUpdateCategory.fulfilled,
    //       thunks.doGetCategory.fulfilled,
    //       thunks.doGetCategories.fulfilled,
    //   ),
    //   (state: any, action) => {
    //     if (!action.payload) return;
    //     adapter.upsertMany(state, action.payload.data);
    //
    //   }
    // );
  },
});

const Category = {
  actions,
  thunks,
  slice,
  selectors
};
export default Category;
