import css from './LoginPage.module.css';
import AppBar from '../../components/AppBar/AppBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import { FaHeart } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <>
      <div className={css.bgImage}></div>
      <AppBar />
      <div className={css.text}>
        <p>
          <span className={css.icon}>
            <FaHeart />
          </span>
          We&#39;re glad to see you again! Please sign in to access your account.
        </p>
      </div>
      <LoginForm />
    </>
  );
};

export default LoginPage;
