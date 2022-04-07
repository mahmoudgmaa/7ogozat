import {createSelector, EntitySelectors} from '@reduxjs/toolkit';
import {RootState} from '../reducers';
import adapter from './adapter';
import {TResource} from './model';
import {TUser} from "../user/model";

// interface TBusinessSelectors extends EntitySelectors<TBusiness, any> {
//   selectA1: typeof selectA1;
//   selectByName: typeof selectByName
// }
const adapterSelectors: EntitySelectors<TResource, any> = adapter.getSelectors(
  (state: RootState) => state.resources,
);

type TBusinessByName = (state: RootState, name:string) => TResource | undefined;

// const selectA = (state: RootState,name:string) =>
//     adapterSelectors.selectById(state, name || '');
//
// const selectA1 = createSelector([selectA], a => a?.en_name)
// const selectByName:TBusinessByName =  (state: RootState,name:string) =>
//     adapterSelectors.selectById(state, name || '');

const selectors = {

  ...adapterSelectors,
};

export default selectors;
