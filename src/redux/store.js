import { configureStore } from '@reduxjs/toolkit';
import { rootReduser } from './rootReducer';
import { myContactSlice } from './contactSlice';

export const store = configureStore({
  reducer: rootReduser,

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    myContactSlice.middleware,
  ],
});
