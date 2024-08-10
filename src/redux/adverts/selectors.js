import { createSelector } from '@reduxjs/toolkit';

import { selectFilters } from '../filters/selectors';

export const selectAdverts = state => state.adverts.items;
export const selectLoading = state => state.adverts.loading;
export const selectError = state => state.adverts.error;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filter) => {
    // Получаем массив ключей для фильтрации
    const filterKeys = filter.selectedFilters.equipment;

    // Фильтрация
    const filteredAdverts = adverts.filter(advert => {
      const details = advert.details;

      // Фильтрация по локации
      const locationMatch = advert.location.includes(filter.location);

      // Если нет ключей для фильтрации, возвращаем все объявления
      if (!filterKeys || filterKeys.length === 0) return locationMatch;

      // Фильтрация по нескольким ключам
      const detailsMatch = filterKeys.every(key => key in details && details[key] !== 0);

      return locationMatch && detailsMatch;
    });

    return filteredAdverts;
  }
);
