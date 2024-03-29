import css from './AppBar.module.css';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};

export default AppBar;
