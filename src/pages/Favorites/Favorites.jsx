import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Favorites.jsx';
import FavoritesList from '../../components/FavoritesList/FavoritesList.jsx';
import { fetchFavorites } from '../../redux/favorites/operations.js';
import { selectError, selectLoading } from '../../redux/favorites/selectors.js';

const Favorites = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

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
