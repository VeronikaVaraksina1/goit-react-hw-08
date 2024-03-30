import css from './RegisterPage.module.css';
import AppBar from '../../components/AppBar/AppBar';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { FaHeart } from 'react-icons/fa';

const RegisterPage = () => {
  return (
    <>
      <AppBar />
      <div className={css.container}>
        <h2>Save time and simplify your life with us! </h2>
        <div className={css.text}>
          <p>
            <span className={css.icon}>
              <FaHeart />
            </span>
            Registering on our phone contacts storage platform is a step towards efficient contact
            management and saving valuable time.
          </p>
          <p>
            Start now and experience the ease of managing contacts that previously took you much
            time and effort.
          </p>
        </div>
      </div>
      <RegisterForm />
      <div className={css.bgImage}></div>
    </>
  );
};

export default RegisterPage;
