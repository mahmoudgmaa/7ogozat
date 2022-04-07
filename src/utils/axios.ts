import {AxiosError} from 'axios';

const getAxiosErrorResponse = ({data,status}: any = {}) => {
  return {data, status};
};

const getAxiosErrorRequest = ({config}: AxiosError) => {
  const {data, headers} = config || {};
  return {data, headers};
};
export {getAxiosErrorResponse, getAxiosErrorRequest};
