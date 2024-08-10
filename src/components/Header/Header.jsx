import css from './Header.module.css';
import Navigation from '../Navigation/Navigation.jsx';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
