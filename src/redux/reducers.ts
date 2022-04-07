import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import loadingSlice from "./_loading";
import errorsSlice from "./_errors";
import checkupReducer from "./_checkup/reducer";
import permissionsReducer from "./_permissions/reducer";
import paginationSlice from "./_pagination";
import generalSlice from "./_general/reducer";
import CurrentPath from "./_selectedPath";

import Users from "./user";
import pick from "lodash/pick";
import Business from "./business";
import Categories from "./category";
import Resources from "./resource";

const REDUCERS_TO_PERSIST = ["_checkups", "_permissions", "_general"];

const combinedReducer = combineReducers({
  _checkups: checkupReducer,
  _permissions: permissionsReducer,
  _loading: loadingSlice.reducer,
  _errors: errorsSlice.reducer,
  _pagination: paginationSlice.reducer,
  _general: generalSlice.reducer,
  _currentPath: CurrentPath.slice.reducer,
  [Users.slice.name]: Users.slice.reducer,
  [Business.slice.name]: Business.slice.reducer,
  [Categories.slice.name]: Categories.slice.reducer,
  [Resources.slice.name]: Resources.slice.reducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === Users.actions.doSignout.type) {
    const persistingState = pick(state, REDUCERS_TO_PERSIST);
    return combinedReducer(persistingState as RootState, action);
  }
  return combinedReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof combinedReducer>;
