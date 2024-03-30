import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';
import clsx from 'clsx';

const UserMenu = () => {
  return (
    <div className={css.container}>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
        to="/login"
      >
        Log In
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
        to="/register"
      >
        Sign Up
      </NavLink>
    </div>
  );
};

export default UserMenu;
