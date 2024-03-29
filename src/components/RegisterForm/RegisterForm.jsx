import css from './RegisterForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  name: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required field'),
  number: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required field'),
});

const LoginForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label className={css.label} htmlFor={nameId}>
            Username
          </label>
          <Field type="text" name="username" id={nameId} />
          <ErrorMessage className={css.error} name="username" component="p" />
        </div>

        <div className={css.field}>
          <label className={css.label} htmlFor={emailId}>
            Email
          </label>
          <Field type="text" name="email" id={emailId} />
          <ErrorMessage className={css.error} name="email" component="p" />
        </div>

        <div className={css.field}>
          <label className={css.label} htmlFor={passwordId}>
            Password
          </label>
          <Field type="text" name="password" id={passwordId} />
          <ErrorMessage className={css.error} name="password" component="p" />
        </div>

        <button className={css.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
