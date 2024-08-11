import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import css from './Favorites.module.css';
import FavoritesList from '../../components/FavoritesList/FavoritesList.jsx';
import { selectError, selectFavorites, selectLoading } from '../../redux/favorites/selectors.js';

const Favorites = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {error && <p className={css.error}>Something went wrong. Please reload the page!</p>}
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? <p>Loading...</p> : <FavoritesList />}
      </Suspense>
    </div>
  );
};

export default Favorites;
