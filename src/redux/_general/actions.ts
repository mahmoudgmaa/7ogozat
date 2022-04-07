import {createAction} from '@reduxjs/toolkit';

export const doSetGeneralValue = createAction<{
  key: string;
  value: any;
}>('set_general');
