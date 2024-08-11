// filters/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  selectedFilters: {
    equipment: [],
    transmission: [],
    type: [],
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.location = action.payload.location;
      state.selectedFilters = action.payload.selectedFilters;
    },
    setSelectedFilters(state, action) {
      state.selectedFilters = action.payload;
    },
  },
});

export const { changeFilter, setSelectedFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
