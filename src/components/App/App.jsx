import css from './App.module.css';
import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';

const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Registration = lazy(() => import('../../pages/Registration/Registration'));
const Login = lazy(() => import('../../pages/Login/Login'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Layout>
        <Suspense fullback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
