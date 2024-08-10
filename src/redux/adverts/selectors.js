import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from '../filters/selectors.js';

export const selectAdverts = state => state.adverts.items;
export const selectLoading = state => state.adverts.loading;
export const selectError = state => state.adverts.error;
export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    return adverts.filter(
      advert =>
        advert.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        advert.number.includes(filter.trim())
    );
  }
);
