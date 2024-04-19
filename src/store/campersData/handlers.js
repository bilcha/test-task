export const handleFulfilledData = (state, { payload }) => {
  debugger;
  if (state.currentPage === 1) {
    state.campersData = payload;
  } else {
    state.campersData.push(...payload);
  }
  state.isLoading = false;
  state.currentPage += 1;
};
export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};
