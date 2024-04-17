import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilledData, handlePending, handleRejected } from './handlers';
import { getCamperDataThunk } from './thunk';

const dataSlice = createSlice({
  name: 'campersData',
  initialState: {
    campersData: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCamperDataThunk.fulfilled, handleFulfilledData)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});
export const campersReducer = dataSlice.reducer;
