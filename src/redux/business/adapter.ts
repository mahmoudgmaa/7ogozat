import {createEntityAdapter} from '@reduxjs/toolkit';
import {TBusiness} from './model';

const adapter = createEntityAdapter<TBusiness>({
  selectId: (business) => business.id,
});

export default adapter;
