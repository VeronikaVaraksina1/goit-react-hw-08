import css from './FullscreenLoader.module.css';
import Loader from '../Loader/Loader';

const FullscreenLoader = () => {
  return (
    <div className={css.container}>
      <Loader />
    </div>
  );
};

export default FullscreenLoader;
