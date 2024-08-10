import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: { location: '', selectedFilters: { equipment: [], type: [] } },
  reducers: {
    changeFilter(state, action) {
      const { location, selectedFilters } = action.payload;

      state.location = location;
      state.selectedFilters = selectedFilters;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
