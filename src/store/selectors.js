// import { createSelector } from '@reduxjs/toolkit';

export const campersData = state => state.campersData.campersData;
export const selectorPage = state => state.campersData.currentPage;
export const selectError = state => state.campersData.error;
export const selectIsLoading = state => state.campersData.isLoading;

// export const selectFilters = state => state.filter.filter;

// export const filteredContactsSelector = createSelector(
//   [selectContacts, selectFilters],
//   (contacts, filterValue) => {
//     return contacts?.filter(el => el.name.toLowerCase().includes(filterValue));
//   }
// );
