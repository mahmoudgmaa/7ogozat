import {createSlice, isFulfilled} from '@reduxjs/toolkit';
import {getActionMainType} from '../utils/redux';
import {getPaginatedKey} from './utils/createPaginatedAsyncThunk';

const slice = createSlice<any, any, '_pagination'>({
  name: '_pagination',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isFulfilled, (state, action: any) => {
      const {meta} = action;
      const params = meta?.arg?.params || {};
      const paginationConfig = {
        params,
        type: getActionMainType(action),
      };
      const paginationKey = getPaginatedKey(paginationConfig);
      const {meta: paginationMeta} = action.payload;
      state[paginationKey] = paginationMeta;
    });
  },
});

export default slice;
