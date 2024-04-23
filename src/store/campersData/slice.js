import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilledData, handlePending, handleRejected } from './handlers';
import { getCamperDataThunk } from './thunk';
import { addSelectedCamper, removeSelectedCamper } from './actionFile.js';

const dataSlice = createSlice({
  name: 'campersData',
  initialState: {
    campersData: [],
    currentPage: 0,
    camperSelected: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCamperDataThunk.fulfilled, handleFulfilledData)
      .addCase(addSelectedCamper, (state, action) => {
        state.camperSelected = action.payload;
      })
      .addCase(removeSelectedCamper, state => {
        state.camperSelected = null;
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const campersReducer = dataSlice.reducer;
