import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuthUserThunk } from '../redux/authReducer';
import { getBasketThunk, getBookFavoriteThunk, getBooksThunk } from '../redux/reducer';

function ProtectedRoute({ component: Component, isAuth }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksThunk());
    if (!isAuth) {
      dispatch(getAuthUserThunk())
        .catch(error => {
          navigate('/login');
        });
    } else {
      dispatch(getBookFavoriteThunk());
      dispatch(getBasketThunk());
    }
  }, [isAuth, dispatch, navigate]);

  if (!isAuth) {
    //надо сюда добавить прелоадер и убрать нулл
    return null;
  }

  return <Component />;
}

export default ProtectedRoute;