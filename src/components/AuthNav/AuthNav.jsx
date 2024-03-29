import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.container}>
      <p>Hello, users!</p>
      <button className={css.button}>Log Out</button>
    </div>
  );
};

export default AuthNav;
