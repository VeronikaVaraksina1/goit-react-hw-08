import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className={css.container}>
      <p>Hello, {user}!</p>
      <button className={css.button}>Log Out</button>
    </div>
  );
};

export default UserMenu;
