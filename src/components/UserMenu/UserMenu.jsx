import { Link } from 'react-router-dom';
import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.container}>
      <Link to="/login">Log In</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  );
};

export default UserMenu;
