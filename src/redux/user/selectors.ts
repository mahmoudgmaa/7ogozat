import {EntitySelectors} from '@reduxjs/toolkit';
import {RootState} from '../reducers';
import adapter from './adapter';
import {TUser} from './model';


const adapterSelectors: EntitySelectors<TUser, any> = adapter.getSelectors(
  (state: RootState) => state.business_admin,
);
type TCurrentUser = (state: RootState) => TUser | undefined;
const currentUser: TCurrentUser = (state: RootState) =>
  adapterSelectors.selectById(state, state.business_admin.current_user || '');

const selectors = {
  currentUser,
  ...adapterSelectors,
};

export default selectors;
