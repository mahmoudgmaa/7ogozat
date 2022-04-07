import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {TStore} from "./store";
import assign from "lodash/assign";
import {CheckupKeys} from "./constants";
import Users from "./user"

const initAxios = (store: TStore) => {
  const injectAuthHeaders = (config: AxiosRequestConfig) => {
    const checkupsStore = store.getState()._checkups;
    const token = checkupsStore[CheckupKeys.USER_TOKEN];
    const client = checkupsStore[CheckupKeys.CLIENT_TOKEN];
    const uid = checkupsStore[CheckupKeys.UID_TOKEN];
    const authHeaders = {token, client, uid};
    assign(config.headers, authHeaders);
    return config;
  };

  const unautherizedHandling = (error: AxiosError) => {
    const {status, data} = (error?.response as any) || {};
    const {response_code} = data || {};

    if (status === 401 && (response_code === 2 || response_code === 3)) return;
    if (status === 401 && response_code !== 1) {
      // localStorage.multiRemove(Object.values(CheckupKeys));
      store.dispatch(Users.actions.doSignout());
    }
  };
  
  const handleFormData = (config: AxiosRequestConfig) => {
    if (config.data instanceof FormData) {
      assign(config.headers, {
        "Content-Type": "multipart/form-data",
      });
    }
    return config;
  };

  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.interceptors.request.use(injectAuthHeaders);
  axios.interceptors.response.use(undefined, (error) => {
    unautherizedHandling(error);
    return Promise.reject(error?.response);
  });
  axios.interceptors.request.use(handleFormData);
};

export default initAxios;
