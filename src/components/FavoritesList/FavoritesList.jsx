import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import css from './FavoritesList.module.css';
import { selectFavorites } from '../../redux/favorites/selectors.js';
import Favorite from '../Favorite/Favorite.jsx';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <div className={css.favorite}>
      <ul>
        {favorites.slice(0, visibleCount).map(advert => (
          <li key={advert._id} className={css.item}>
            <Favorite {...favorites} />
          </li>
        ))}
      </ul>
      {visibleCount < favorites.length && (
        <button className={css['load-more']} type='button' onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default FavoritesList;
