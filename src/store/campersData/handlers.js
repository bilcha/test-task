export const handleFulfilledData = (state, { payload }) => {
  state.campersData = payload;
  state.isLoading = false;
};
export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};
