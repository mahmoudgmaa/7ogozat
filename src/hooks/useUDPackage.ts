import debounce from 'lodash/debounce';
import {useCallback, useEffect, useState} from 'react';

const debouncedFunction = debounce((callback: () => void) => {
  if (callback) callback();
}, 1500);

export type TUDCallbacks = {
  /**
   * Function provided form the component to intercept the uploading progress passed from axios
   */
  onUploadProgress?: (progress: number) => void;
  /**
   * Function provided form the component to intercept the downloading progress passed from axios
   */
  onDownloadProgress?: (progress: number) => void;
};

const useUDState = () => {
  const [idle, setIdle] = useState(false);
  const [progress, setBasicProgress] = useState(0);

  const setProgress = useCallback((payload: number) => {
    debouncedFunction.cancel();
    setIdle(false);
    if (payload > 0) {
      setBasicProgress(payload);
    }
  }, []);
  const resetProgress = useCallback(() => setBasicProgress(0), [
    setBasicProgress,
  ]);

  useEffect(() => {
    debouncedFunction.cancel();
    if (progress === 100) {
      debouncedFunction(() => setIdle(false));
    } else {
      debouncedFunction(() => setIdle(true));
    }
  }, [progress]);

  return {idle, progress, setProgress, resetProgress};
};

export type TProgressHandlers = {
  callbacks?: TUDCallbacks;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  resetProgress: () => void;
};

/**
 * Useful hook to initiate your progress tracking state and resets
 * to `0` upon completion
 */
const useUDPackage = (callbacks: TUDCallbacks = {}) => {
  const {idle, progress, setProgress, resetProgress} = useUDState();
  return {
    idle,
    progress,
    progressHandlers: {
      setProgress,
      resetProgress,
      callbacks,
    } as TProgressHandlers,
  };
};

export default useUDPackage;
