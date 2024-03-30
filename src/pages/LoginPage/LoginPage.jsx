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
          Registering on our phone contacts storage platform is a step towards efficient contact
          management and saving valuable time.
        </p>
      </div>
      <LoginForm />
    </>
  );
};

export default LoginPage;
