import css from './App.module.css';

import HomePage from '../../pages/HomePage/HomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className={css.container}>
      <Suspense fullback={null}>
        <Routes>
          <Route patch="/" element={<HomePage />} />
          <Route patch="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
