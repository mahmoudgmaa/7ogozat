import {createEntityAdapter} from '@reduxjs/toolkit';
import {TResource} from './model';

const adapter = createEntityAdapter<TResource>({
  selectId: (resource) => resource.id,
});

export default adapter;
