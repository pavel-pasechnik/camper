import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import css from './AdvertsList.module.css';
import { selectFilteredAdverts } from '../../redux/adverts/selectors.js';
import Advert from '../Advert/Advert.jsx';

const AdvertsList = () => {
  const adverts = useSelector(selectFilteredAdverts);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <div className={css.advert}>
      <ul>
        {adverts.slice(0, visibleCount).map(advert => (
          <li key={advert._id} className={css.item}>
            <Advert {...advert} />
          </li>
        ))}
      </ul>
      {visibleCount < adverts.length && (
        <button className={css['load-more']} type='button' onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default AdvertsList;
