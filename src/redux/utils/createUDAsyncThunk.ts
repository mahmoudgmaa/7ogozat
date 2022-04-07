import {AsyncThunkPayloadCreator, createAsyncThunk} from '@reduxjs/toolkit';
import {TProgressHandlers, TUDCallbacks} from '../../hooks/useUDPackage';
import set from 'lodash/set';

export type TUDPayload = {
  /**
   * Actual data passed to the thunk through its `arg`
   */
  data: any;
  config?: TUDCallbacks;
  /**
   * Callbacks shaped object to pass subscription to axios concerning the upload and download progress
   */
  handlers?: TProgressHandlers;
};

/**
 * Upload progress helper that takes an input function as its callback to
 * pass the upload progress value to it
 * @param callback function passed through the component
 */
export const createUDSubscriber = (
  callback: (progress: number) => void = () => {},
) => (progressEvent: ProgressEvent) => {
  var percentCompleted = Math.round(
    (progressEvent.loaded * 100) / progressEvent.total,
  );
  if (callback) callback(percentCompleted);
  else {
    throw new Error(
      'No valid `callback` listener for the `createUDAsyncThunk`',
    );
  }
};

/**
 * Introducting `create(Upload/Download)AsyncThunk`; Similar thunk as the `createAsyncThunk` except that it take an additional
 * third param in its payload creator function to be passed to the api handler
 * @param {string} uniqueIndentifier unique identifier for the thunk
 * @param payloadCreator augmented payload creator with a third param to denote the axios config handlers
 * @example
 * ```ts
 * // From `thunks.ts`
 * const doUpload = createUDAsyncThunk(
 *   'test_upload',
 *   async (payload, thunkAPI) => {
 *     try {
 *       const {
 *         callbacks, // your callbacks are stored safely here, you can just pass them to axios right away
 *         data // your data passed from the component
 *       } = payload;
 *       const response = await UsersAPI.uploadImage(data, callbacks);
 *       return { // Whatever you like here  };
 *     } catch (error) {}
 *   },
 * )
 *
 * // From `component.ts`
 * const [uploadProgress, setUploadProgress] = useState(0);
 * dispatch(doUpload({
 *   data: {}
 *   callbacks: {
 *     onUploadProgress: setUploadProgress
 *   }
 * }))
 * ```
 */
export const createUDAsyncThunk = <ReturnedValue>(
  type: string,
  callback: AsyncThunkPayloadCreator<ReturnedValue, TUDPayload>,
  options?: any,
) =>
  createAsyncThunk<ReturnedValue, TUDPayload>(
    type,
    (args, thunkAPI) => {
      const {handlers} = args;
      const onUploadProgressSubscriber = (progress: number) => {
        handlers?.setProgress(progress);
        if (handlers?.callbacks?.onUploadProgress) {
          handlers.callbacks.onUploadProgress(progress);
        }
      };
      const onDownloadProgressSubscriber = (progress: number) => {
        handlers?.setProgress(progress);
        if (handlers?.callbacks?.onUploadProgress) {
          handlers.callbacks.onUploadProgress(progress);
        }
      };
      const onUploadProgress = createUDSubscriber(onUploadProgressSubscriber);
      const onDownloadProgress = createUDSubscriber(
        onDownloadProgressSubscriber,
      );
      set(args, 'config', {onUploadProgress, onDownloadProgress});
      return callback(args, thunkAPI);
    },
    options,
  );

export default createUDAsyncThunk;
