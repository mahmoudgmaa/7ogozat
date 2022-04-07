import {AnyAction} from '@reduxjs/toolkit';

/**
 * Helper function to retrieve the correct type prefix from the dispatched action with `createAsyncThunk`
 * @param {AnyAction} action defined action
 * @returns {string} correct type prefix
 */
const getActionMainType = (action: AnyAction) => {
  const typeParts = (action as any).type.split('/');
  typeParts.pop();
  return typeParts.join('/');
};

export {getActionMainType};
