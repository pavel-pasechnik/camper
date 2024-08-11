import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import css from './Filters.module.css';
import svg from '../../assets/sprite.svg';
import { changeFilter } from '../../redux/filters/slice.js';

const initialValues = {
  location: '',
};

Yup.addMethod(Yup.string, 'myValid', function myValid(message) {
  return this.test('my-valid', message, value => {
    const regex = /^[a-z0-9,]*$/i;

    return regex.test(value);
  });
});

const LocationSchema = Yup.object().shape({
  location: Yup.string().trim().myValid(),
});

const Filters = () => {
  const locationId = useId();
  const filtersId = useId();
  const dispatch = useDispatch();

  // Инициализация состояния selectedFilters с пустыми массивами для каждой категории
  const [selectedFilters, setSelectedFilters] = useState({
    equipment: [],
    transmission: [],
    type: [],
  });

  const toggleFilter = (category, filters) => {
    const filtersArray = Array.isArray(filters) ? filters : [filters];

    setSelectedFilters(prevState => {
      const currentFilters = prevState[category] || [];
      const allFiltersSelected = filtersArray.every(filter => currentFilters.includes(filter));

      const newFilters = allFiltersSelected
        ? currentFilters.filter(f => !filtersArray.includes(f))
        : [...currentFilters, ...filtersArray.filter(filter => !currentFilters.includes(filter))];

      return {
        ...prevState,
        [category]: newFilters,
      };
    });
  };

  const handleSubmit = values => {
    const filtersToSubmit = {
      ...values,
      selectedFilters,
    };

    dispatch(changeFilter(filtersToSubmit));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={LocationSchema} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.location}>
          <label className={css['location-label']} htmlFor={locationId}>
            Location
          </label>
          <Field
            className={css['location-input']}
            type='text'
            name='location'
            id={locationId}
            placeholder='Kyiv, Ukraine'
          />
          <ErrorMessage className={css['error-location']} name='location' component='span' />
          <svg className={css['map-pin']} width='18' height='18'>
            <use xlinkHref={`${svg}#icon-map-pin`} />
          </svg>
        </div>
        <div className={css.filters}>
          <label htmlFor={filtersId}>Filters</label>
          <p className={css['filters-paragraph']}>Vehicle equipment</p>
        </div>
        <ul className={css['filters-list']}>
          <li>
            <button
              className={`${css['filters-button']} ${selectedFilters.equipment.includes('AC') ? css.selected : ''}`}
              type='button'
              onClick={() => toggleFilter('equipment', 'airConditioner')}>
              <svg className={css.icon} width='32' height='32'>
                <use xlinkHref={`${svg}#icon-AC`} />
              </svg>
              <span>AC</span>
            </button>
          </li>
          <li>
            <button
              className={`${css['filters-button']} ${selectedFilters.transmission.includes('automatic') ? css.selected : ''}`}
              type='button'
              onClick={() => toggleFilter('transmission', 'automatic')}>
              <svg className={css.icon} width='32' height='32'>
                <use xlinkHref={`${svg}#icon-automatic`} />
              </svg>
              <span>Automatic</span>
            </button>
          </li>
          <li>
            <button
              className={`${css['filters-button']} ${selectedFilters.equipment.includes('kitchen') ? css.selected : ''}`}
              type='button'
              onClick={() => toggleFilter('equipment', 'kitchen')}>
              <svg className={css.icon} width='32' height='32'>
                <use xlinkHref={`${svg}#icon-kitchen`} />
              </svg>
              <span>Kitchen</span>
            </button>
          </li>
          <li>
            <button
              className={`${css['filters-button']} ${selectedFilters.equipment.includes('TV') ? css.selected : ''}`}
              type='button'
              onClick={() => toggleFilter('equipment', 'TV')}>
              <svg className={css.icon} width='32' height='32'>
                <use xlinkHref={`${svg}#icon-TV`} />
              </svg>
              <span>TV</span>
            </button>
          </li>
          <li>
            <button
              className={`${css['filters-button']} ${selectedFilters.equipment.includes('shower') && selectedFilters.equipment.includes('toilet') ? css.selected : ''}`}
              type='button'
              onClick={() => toggleFilter('equipment', ['shower', 'toilet'])}>
              <svg className={css.icon} width='32' height='32'>
                <use xlinkHref={`${svg}#icon-shower`} />
              </svg>
              <span>Shower/WC</span>
            </button>
          </li>
        </ul>
        <div className={css.filters}>
          <p className={css['filters-paragraph']}>Vehicle type</p>
        </div>
        <ul className={css['filters-list']}>
          <li>
            <button
              className={`${css['filters-button']} ${selectedFilters.type.includes('van') ? css.selected : ''}`}
              type='button'
              onClick={() => toggleFilter('type', 'van')}>
              <svg className={css.icon} width='32' height='32'>
                <use xlinkHref={`${svg}#icon-camper-1`} />
              </svg>
              <span>Van</span>
            </button>
          </li>
          <li>
            <button
              className={`${css['filters-button']} ${selectedFilters.type.includes('fullyIntegrated') ? css.selected : ''}`}
              type='button'
              onClick={() => toggleFilter('type', 'fullyIntegrated')}>
              <svg className={css.icon} width='32' height='32'>
                <use xlinkHref={`${svg}#icon-camper-2`} />
              </svg>
              <span>Fully Integrated</span>
            </button>
          </li>
          <li>
            <button
              className={`${css['filters-button']} ${selectedFilters.type.includes('alcove') ? css.selected : ''}`}
              type='button'
              onClick={() => toggleFilter('type', 'alcove')}>
              <svg className={css.icon} width='32' height='32'>
                <use xlinkHref={`${svg}#icon-camper-3`} />
              </svg>
              <span>Alcove</span>
            </button>
          </li>
        </ul>
        <button className={css.search} type='submit'>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default Filters;
