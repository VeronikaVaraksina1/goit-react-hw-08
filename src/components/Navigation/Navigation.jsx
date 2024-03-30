import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
