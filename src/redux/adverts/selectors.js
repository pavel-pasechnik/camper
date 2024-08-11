import { createSelector } from '@reduxjs/toolkit';

import { selectFilters } from '../filters/selectors';

export const selectAdverts = state => state.adverts.items;
export const selectLoading = state => state.adverts.loading;
export const selectError = state => state.adverts.error;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filter) => {
    const filterEquipmentKeys = filter.selectedFilters.equipment;
    const filterType = filter.selectedFilters.type;
    const filterTransmission = filter.selectedFilters.transmission;

    const filteredAdverts = adverts.filter(advert => {
      const details = advert.details;
      const form = advert.form;
      const transmission = advert.transmission;

      const locationMatch = advert.location.includes(filter.location);

      const detailsMatch = filterEquipmentKeys.every(key => key in details && details[key] !== 0);

      const formMatch = filterType.every(type => form.includes(type));

      const transmissionMatch = filterTransmission.every(value => transmission.includes(value));

      return locationMatch && detailsMatch && formMatch && transmissionMatch;
    });

    return filteredAdverts;
  }
);
