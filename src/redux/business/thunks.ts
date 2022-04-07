import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "./api";


export const doCreateBusiness = createAsyncThunk<any, any, any>(
  "businesses/create",
  async (data, thunkAPI) => {
    try {
      const response = await Api.createBusiness(data);
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue({error});
    }
  }
);

export const doUpdateBusiness = createAsyncThunk<any, any, any>(
  "businesses/update",
  async (data, thunkAPI) => {
    try {
      const response = await Api.updateBusiness(data);
      return {
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({error});
    }
  }
);


export const doFetchBusiness = createAsyncThunk<any, any, any>(
    "businesses/fetch",
    async (id,thunkAPI ) => {
        try {
            const response = await Api.getBusiness(id);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
);
