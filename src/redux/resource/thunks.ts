import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "./api";
import business from "../business";


export const doCreateResource = createAsyncThunk<any, any, any>(
  "resource/create",
  async (data, thunkAPI) => {
    try {
      const response = await Api.createResource(data);
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue({error});
    }
  }
);

export const doUpdateResource = createAsyncThunk<any, any, any>(
  "resource/update",
  async (data, thunkAPI) => {
    try {
      const response = await Api.updateResource(data);
      return {
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({error});
    }
  }
);


export const doFetchResource = createAsyncThunk<any, any, any>(
    "resource/fetch",
    async (id,thunkAPI ) => {
        try {
            const response = await Api.getResource(id);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
);
export const doFetchResources = createAsyncThunk<any, any, any>(
    "resource/fetchAll",
    async (data,thunkAPI ) => {
        try {
            const response = await Api.getResources(data);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
);
