import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDataAPI } from 'api/camperAPI';

export const getCamperDataThunk = createAsyncThunk(
  'camperData/fetchAll',
  (page, thunkAPI) => {
    try {
      const response = getDataAPI(page);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
