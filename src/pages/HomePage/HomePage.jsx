import AppBar from '../../components/AppBar/AppBar';
import css from './HomePage.module.css';
import homeImage from '../../img/img-home.jpg';

const HomePage = () => {
  return (
    <div>
      <div className={css.bgImage}></div>
      <AppBar />
      <div className={css.containerTitle}>
        <h1 className={css.title}>Welcome to Contact Kingdom!</h1>
      </div>
      <h2 className={css.subtitle}>
        Simplify your life and stay organized with our user-friendly online tool designed to
        streamline your contact management experience.
      </h2>
      <div className={css.containerDescription}>
        <h3>Advantages of Contact Kingdom:</h3>
        <ul className={css.list}>
          <li>
            <h3>Centralized Contact Storage</h3>
            <p>
              Access all your contacts from one convenient location on the page &#39;Contacts&#39;.
              Say goodbye to the hassle of losing contact information due to misplaced notebooks or
              outdated files.
            </p>
          </li>
          <li>
            <h3>Easy Accessibility</h3>
            <p>
              Access your contacts anytime, anywhere, as long as you have an internet connection.
            </p>
          </li>
          <li>
            <h3>Effortless Find</h3>
            <p>Quickly find the contacts you need, when you need them.</p>
          </li>
          <li>
            <h3>Sync Across Devices</h3>
            <p>
              Seamlessly sync your contacts across multiple devices, ensuring you always have the
              most up-to-date information at your fingertips, whether you&#39;re using your
              computer, tablet, or smartphone.
            </p>
          </li>
        </ul>

        <h3 className={css.description}>
          Sign up now and start enjoying the benefits of efficient contact management. Say hello to
          simplicity, organization, and peace of mind.
        </h3>
      </div>
      <img className={css.image} src={homeImage} alt="home image" />
    </div>
  );
};

export default HomePage;
