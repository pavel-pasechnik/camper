import { useId } from 'react';

import css from './Advert.module.css';
import svg from '../../assets/sprite.svg';
import Features from '../Features/Features.jsx';

const Advert = ({ gallery, name, price, rating, location, description, details }) => {
  const id = useId();

  return (
    <div className={css.card}>
      <img src={gallery[0]} alt={name} className={css.img} width='290' height='310' />
      <div className={css.wrapper}>
        <div className={css.title}>
          <p className={css.name}>{name}</p>
          <div className={css.price}>
            <p className={css.currency}>€</p>
            <p className={css.sum}>{price}</p>
          </div>
        </div>
        <div className={css['sub-title']}>
          <svg className={css.star} width='16' height='16'>
            <use xlinkHref={`${svg}#icon-star`} />
          </svg>
          <p className={css.rating}>{rating}</p>
          <svg className={css['map-pin']} width='16' height='16'>
            <use xlinkHref={`${svg}#icon-map-pin`} />
          </svg>
          <p>{location}</p>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.features}>
          {Object.entries(details).map(detail => {
            if (!detail[1]) return null;

            return (
              <li key={`${id}-${detail[0]}`} className={css.detail}>
                <Features {...detail} />
              </li>
            );
          })}
        </ul>
        <button className={css['show-more']} type='button'>
          Show more
        </button>
      </div>
    </div>
  );
};

export default Advert;
