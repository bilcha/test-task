export const campersData = state => state.campersData.campersData;
export const selectorSelectedCamp = state => state.campersData.camperSelected;
export const selectorPage = state => state.campersData.currentPage;
export const selectError = state => state.campersData.error;
export const selectIsLoading = state => state.campersData.isLoading;

export const selectorFavorite = state => state.favorite.favorite;
