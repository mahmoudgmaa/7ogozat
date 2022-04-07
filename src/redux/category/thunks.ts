import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "./api";
import category from "./index";


export const doCreateCategory = createAsyncThunk<any, any, any>(
  "Categories/create",
  async (data, thunkAPI) => {
    try {

        const response = await Api.createCategory(data);
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue({error});
    }
  }
);
export const doDeleteCategory =createAsyncThunk<any, any, any>(
    "Categories/delete",
    async (data, thunkAPI) => {
        try {

            const response = await Api.deleteCategory(data);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
);
export const doUpdateCategory = createAsyncThunk<any, any, any>(
  "Categories/update",
  async (data, thunkAPI) => {
    try {
      const response = await Api.updateCategory(data);

      return {
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({error});
    }
  }
);


export const doGetCategories = createAsyncThunk<any, any, any>(
    "Categories/fetchAll",
    async ({businessId},thunkAPI ) => {
        try {
            const response = await Api.getCategories(businessId);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
);
export const doGetCategory = createAsyncThunk<any, any, any>(
    "Categories/get",
    async ({businessId, categoryId},thunkAPI ) => {
        try {
            const response = await Api.getCategory(businessId,categoryId);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
);
