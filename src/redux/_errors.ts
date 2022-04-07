import { createSlice } from "@reduxjs/toolkit";
import { getAxiosErrorResponse } from "../utils/axios";
import { getActionMainType } from "../utils/redux";

const initialState: { [key: string]: any } = {};

const errorsSlice = createSlice({
  name: "errors_state",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.includes("/pending"),
        (state, action) => {
          state[getActionMainType(action)] = {};
        }
      )
      .addMatcher(
        (action) => action.type.includes("/rejected"),
        (state, action) => {
          const { payload } = action;
          if (payload.error)
            state[getActionMainType(action)] = getAxiosErrorResponse(
              payload.error
            );
        }
      );
  },
});

export default errorsSlice;
