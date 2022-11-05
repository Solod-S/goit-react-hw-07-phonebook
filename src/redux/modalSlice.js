import { createSlice } from '@reduxjs/toolkit';
export const myModalSlice = createSlice({
  name: 'modal',
  initialState: { isActive: false, id: null },
  reducers: {
    toggle(state, action) {
      state.isActive = !state.isActive;
      state.id = action.payload;
    },
  },
});

export const { toggle } = myModalSlice.actions;
