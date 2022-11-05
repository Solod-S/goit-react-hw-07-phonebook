import { combineReducers } from '@reduxjs/toolkit';

import { myContactSlice } from './contactSlice';
import { myFilterSlice } from './filterSlice';
import { myModalSlice } from './modalSlice';
export const rootReduser = combineReducers({
  [myContactSlice.reducerPath]: myContactSlice.reducer,
  filter: myFilterSlice.reducer,
  modal: myModalSlice.reducer,
});
