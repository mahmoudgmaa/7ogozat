import {AsyncThunkPayloadCreator, createAsyncThunk, Dispatch,} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';
import set from 'lodash/set';
import {RootState} from '../reducers';
import {AppDispatch} from '../store';

type TPaginationMeta = {
  total_entries: number;
  total_pages: number;
  next_page: number | null;
  previous_page: number | null;
  current_page: number;
  per_page: number;
};

type TGetPaginatedKey = {
  type: string;
  params?: {
    page: number;
    per_page: number;
    [key: string]: any;
  };
};

/**
 * A utilty function that extracts a pagination key using the action type
 * and the API params passed to a thunk.
 *
 * Example returns:
 * 1. type = users/fetchUsers, params = { page: 3, matching: true } => 'users/fetchUsers?matching=true'
 * 2. type = users/fetchUsers, params = { page: 3 } => 'users/fetchUsers'
 *
 * @param {TGetPaginatedKey} config Action type and the custom params.
 *
 * @returns {string} Pagination key.
 */
export const getPaginatedKey = (config: TGetPaginatedKey) => {
  const params = omit(config.params, ['page', 'per_page']);
  const query = queryString.stringify(params);
  const seperator = isEmpty(query) ? '' : '?';
  return `${config.type}${seperator}${query}`;
};

/**
 * A utilty function that extracts the meta data of pagination returned from the API
 * and adds any extra params in the second argument then returns these two values together in
 * an object
 *
 * @param {AxiosResponse} response Response returned from backend.
 * @param extraData Any data you wish to include in the payload sent to the reducers.
 *
 * @returns Combined payload with pagination metadata.
 */
export const withPaginationMeta = <E>(
  response: AxiosResponse,
  extraData: E,
) => {
  const meta = response.data.meta;
  return {meta, ...extraData};
};

export type TPaginationConfig = {
  refresh?: boolean;
  params?: any;
};

type PaginatedThunkAPIConfig = {
  dispatch?: AppDispatch | Dispatch;
  extra: {withPaginationMeta: typeof withPaginationMeta};
};

/**
 * A function that extends `createAsyncThunk` adding an automated pagination handler to augment
 * the params passed to the API call by adding the `next_page` if it exists.
 *
 * NOTE: must be used in conjuntion with the pagination reducer `_pagination`. Where the pagaintion
 * metadata for all actions is saved.
 *
 * The function defines a custom condition that halts the execution in case the request is paginated and
 * the `next_page` is `null`. This means that there are no more pages and no need to call the API.
 *
 * You actually use it the same way you use `createAsyncThunk`. However, the returned params are
 * now augmented and contain the correct page to be fetched (pass these params to you API
 *
 * @example
 *
 * ```ts
 *export const doFetchDevelopersNames = createPaginatedAsyncThunk<any, IFetchLabels>(
 *  'developers/fetchAll',
 *  async ({params} = defaultFetchLabelsConfig, {extra}) => {
 *    const response = await DevelopersAPI.fetchAll({params});
 *    return extra.withPaginationMeta(response, {...normalized.entities});
 *  },
 * );
 * ```
 *
 * Also, your extra thunkAPI argument now includes a `withPaginationMeta` which you have to pass the
 * response to it as the first param. This function will pass your pagination metadata to the store.
 * Add any extra data you need to pass into the second argument.
 *
 * @param {string} type Distinct action name.
 * @param {AsyncThunkPayloadCreator} callback Callback funtion where you handle your custom thunk logic.
 * @param {any} options Options defined by `createAsyncThunk` such as `condition`.
 *
 * @returns {typeof createAsyncThunk} Normal `createAsyncThunk` with correct types and extra pagination logic handlers.
 */
const createPaginatedAsyncThunk = <ReturnedValue, Args>(
  type: string,
  callback: AsyncThunkPayloadCreator<
    ReturnedValue,
    Args,
    PaginatedThunkAPIConfig
  >,
  options?: any,
) =>
  createAsyncThunk<
    ReturnedValue,
    Args & TPaginationConfig,
    PaginatedThunkAPIConfig
  >(
    type,
    (config, thunkAPI) => {
      const {params, refresh}: Args & TPaginationConfig = config;
      const paginationKey = getPaginatedKey({params, type});
      const {_pagination} = thunkAPI.getState() as RootState;
      const paginationMeta: TPaginationMeta = _pagination[paginationKey];

      if (
        !refresh &&
        paginationMeta?.next_page &&
        paginationMeta?.next_page !== null
      ) {
        set(config as Object, 'params.page', paginationMeta.next_page);
      }

      return callback(config, thunkAPI);
    },
    {
      ...options,
      condition: (config, thunkAPI) => {
        const {params, refresh} = config;
        if (refresh) return true;
        const {_loading, _pagination} = thunkAPI.getState() as RootState;
        if (_loading[type]) return false;

        const paginationKey = getPaginatedKey({params, type});
        const paginationMeta: TPaginationMeta = _pagination[paginationKey];
        if (paginationMeta?.next_page === null) return false;

        const extraCondition =
          options?.condition && options.condition(config, thunkAPI);
        return extraCondition;
      },
    },
  );

export default createPaginatedAsyncThunk;
