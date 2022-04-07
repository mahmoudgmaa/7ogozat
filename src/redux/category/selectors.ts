import {EntitySelectors} from '@reduxjs/toolkit';
import {RootState} from '../reducers';
import adapter from './adapter';
import {TCategory} from './model';


const adapterSelectors: EntitySelectors<TCategory, any> = adapter.getSelectors(
  (state: RootState) => state.categories,
);


const selectors = {
  ...adapterSelectors,
};

export default selectors;
