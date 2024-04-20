import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilledData, handlePending, handleRejected } from './handlers';
import { getCamperDataThunk } from './thunk';

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
        state.selectedCamper = action.payload;
      })
      .addCase(removeSelectedCamper, state => {
        state.selectedCamper = null;
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});
export const { addSelectedCamper, removeSelectedCamper } = dataSlice.actions;
export const campersReducer = dataSlice.reducer;
