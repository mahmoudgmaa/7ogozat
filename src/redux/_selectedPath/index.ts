import { doSetCurrentPath } from "./action";
import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./action";

const initialState = {
  currentPath : "Business Info"
};

const slice = createSlice({
  name: "current_path_slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSetCurrentPath, (state: any, action) => {
      const { payload } = action;
      state.currentPath = payload.currentPath;
    });
  },
});

const CurrentPath = {
  slice,
  actions,
};

export default CurrentPath;
