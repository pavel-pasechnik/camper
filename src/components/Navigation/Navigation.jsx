import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div className={css.header}>
      <nav>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to='/adverts'>
          Adverts
        </NavLink>
        <NavLink className={buildLinkClass} to='/favorites'>
          Favorites
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
