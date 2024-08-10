import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: { location: '' },
  reducers: {
    changeFilter(state, action) {
      state.location = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
