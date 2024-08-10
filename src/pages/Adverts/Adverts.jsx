import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Adverts.module.css';
import AdvertsList from '../../components/AdvertsList/AdvertsList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { fetchAdverts } from '../../redux/adverts/operations.js';
import { selectError, selectLoading } from '../../redux/adverts/selectors.js';

const Advert = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {error && <p className={css.error}>Something went wrong. Please reload the page!</p>}
      <Filters />
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? <p>Loading...</p> : <AdvertsList />}
      </Suspense>
    </div>
  );
};

export default Advert;
