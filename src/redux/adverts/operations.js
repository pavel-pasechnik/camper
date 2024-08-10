import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b22ca21ca8ad33d4f6d58c.mockapi.io/api/v1/';

export const fetchAdverts = createAsyncThunk('adverts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const addAdverts = createAsyncThunk('adverts/addAdverts', async (newContact, thunkAPI) => {
//   try {
//     const response = await axios.post('/adverts', newContact);

//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const deleteAdverts = createAsyncThunk(
//   'adverts/deleteAdverts',
//   async (advertsId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/adverts/${advertsId}`);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateAdverts = createAsyncThunk(
//   'adverts/updateAdverts',
//   async ({ id, ...advertsData }, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/adverts/${id}`, advertsData);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
