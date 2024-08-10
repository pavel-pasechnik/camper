import { createSlice } from '@reduxjs/toolkit';

// import { addAdverts, deleteAdverts, fetchAdverts } from './operations.js';
import { fetchAdverts } from './operations.js';

const slice = createSlice({
  name: 'adverts',
  initialState: { items: [], loading: false, error: null },

  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
  // .addCase(deleteAdverts.pending, state => {
  //   state.error = false;
  //   state.loading = true;
  // })
  // .addCase(deleteAdverts.fulfilled, (state, action) => {
  //   state.loading = false;
  //   state.items = state.items.filter(contacts => contacts.id !== action.payload.id);
  // })
  // .addCase(deleteAdverts.rejected, state => {
  //   state.loading = false;
  //   state.error = true;
  // })
  // .addCase(addAdverts.pending, state => {
  //   state.error = false;
  //   state.loading = true;
  // })
  // .addCase(addAdverts.fulfilled, (state, action) => {
  //   state.loading = false;
  //   state.items.push(action.payload);
  // })
  // .addCase(addAdverts.rejected, state => {
  //   state.loading = false;
  //   state.error = true;
  // }),
});

export default slice.reducer;
