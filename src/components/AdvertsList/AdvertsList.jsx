import { useSelector } from 'react-redux';

import css from './AdvertsList.module.css';
import { selectFilteredAdverts } from '../../redux/adverts/selectors.js';
import Advert from '../Advert/Advert.jsx';

const AdvertsList = () => {
  const adverts = useSelector(selectFilteredAdverts);

  return (
    <ul>
      {adverts.map(advert => {
        return (
          <li key={advert._id} className={css.item}>
            <Advert {...advert} />
          </li>
        );
      })}
    </ul>
  );
};

export default AdvertsList;
