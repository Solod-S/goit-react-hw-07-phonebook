import { configureStore } from '@reduxjs/toolkit';
// import { rootReduser } from './rootReducer';
import { myContactSlice } from './contactSlice';
import { myFilterSlice } from './filterSlice';
import { myModalSlice } from './modalSlice';

export const store = configureStore({
  reducer: {
    [myContactSlice.reducerPath]: myContactSlice.reducer,
    filter: myFilterSlice.reducer,
    modal: myModalSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(myContactSlice.middleware),
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   rootReduser.middleware,
  // ],
});
