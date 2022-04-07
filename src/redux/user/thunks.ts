import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "./api";


export const doSignin = createAsyncThunk<any, any, any>(
  "business_admins/sign_in",
  async (data, thunkAPI) => {
    try {
      const response = await Api.signIn(data);
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue({error});
    }
  }
);

export const doSignUp = createAsyncThunk<any, any, any>(
  "business_admins",
  async (data, thunkAPI) => {
    try {
      const response = await Api.signUp(data);
      return {
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({error});
    }
  }
);


export const doFetchSelf = createAsyncThunk<any, any, any>(
    "business_admins/self",
    async (thunkAPI ) => {
        try {
            const response = await Api.getSelf();
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
);
