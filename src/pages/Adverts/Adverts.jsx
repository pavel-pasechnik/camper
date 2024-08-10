import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Adverts.module.css';
import AdvertsList from '../../components/AdvertsList/AdvertsList.jsx';
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
    <div>
      {error && <p className={css.error}>Something went wrong. Please reload the page!</p>}
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? <p>Loading...</p> : <AdvertsList />}
      </Suspense>
    </div>
  );
};

export default Advert;
