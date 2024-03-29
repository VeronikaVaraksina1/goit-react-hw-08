import css from './ContactsPage.module.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import toast, { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() => {
        toast.error('Something went wrong! Reload the page');
      });
  }, [dispatch]);

  return (
    <div className={css.container}>
      <AppBar />

      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage>Something went wrong! Please reload the page 🚩</ErrorMessage>}
      <ContactList />
      <Toaster />
    </div>
  );
};

export default ContactsPage;
