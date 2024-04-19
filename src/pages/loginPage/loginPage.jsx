import React, { useEffect, useState } from "react";
import './loginPage.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authReducer";
import { useNavigate } from "react-router-dom";

export function LoginPage() {

  const isAuth = useSelector(state => state.authReducer.isAuth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    window.location.href = "https://social-network.samuraijs.com";
  };

  const goingStartPage = () => {
    navigate('/');
  };

  useEffect(() => {
    if (isAuth) {
      return navigate('/'); // Если пользователь авторизован, возвращаемся на стартовую
    }
  }, [isAuth, navigate]); // Перерендерим компоненту при изменении статуса авторизации

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login__item">
          <div className="login__title">Sign On</div>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
                /*  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                   errors.email = 'Invalid email address'; */
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setLoading(true);
              dispatch(loginUser(values.email, values.password)).then((data) => {
                if (data.username) {
                  setLoading(false);
                  goingStartPage();
                }
                setLoading(false);
                setSubmitting(false);
              })
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <div className="login__email">
                  <label htmlFor="email">E-mail</label>
                  <Field
                    id="email"
                    className="login__name_input"
                    type="email"
                    name="email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="login__password">
                  <label htmlFor="password">Password</label>
                  <Field
                    id="password"
                    className="login__password_input"
                    type="password"
                    name="password"
                    autoComplete="off"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting || loading}>
                  {loading ?
                    'loading...' :
                    'Sign On'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="login__privacy">
            Выполняя вход, вы соглашаетесь с Политикой конфиденциальности и
            Условиями использования BookCodeHub.
          </div>
          <div className="login__newuser-block">
            <span>Впервые в BookCodeHub?</span>
            <button onClick={handleRegister}>Создайте свою учетную запись BookCodeHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};
