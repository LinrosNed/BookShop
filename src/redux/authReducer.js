import api from '../api/api';

const SET_AUTH_USER = 'SET_AUTH_USER';
const IS_AUTH = 'IS_AUTH';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGOUT_ERROR = 'LOGOUT_ERROR';

let initialState = {
  data: {
    id: null,
    login: null,
    email: null,
  },
  isAuth: false,
  authError: null,
  logoutError: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        data: action.data
      };
    case IS_AUTH:
      return {
        ...state, isAuth: action.payload
      };
    case AUTH_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        logoutError: action.payload,
      };
    default: return state;
  }
};

export const setAuthUser = (dataAuthUser) => {
  return {
    type: SET_AUTH_USER,
    data: dataAuthUser,
  }
};
export const isAuthUser = (action) => {
  return {
    type: IS_AUTH,
    payload: action,
  }
};
export const setAuthError = (errorMessage) => {
  return {
    type: AUTH_ERROR,
    payload: errorMessage,
  };
};
export const setLogoutError = (errorMessage) => {
  return {
    type: LOGOUT_ERROR,
    payload: errorMessage,
  };
};

export const getAuthUserThunk = () => (dispatch) => {
  return api.getAuth().then((data) => {
    if (data.user) {
      dispatch(setAuthUser(data));
      dispatch(isAuthUser(true));
      dispatch(setAuthError(null));
    } else {
      dispatch(setAuthError(true));
      dispatch(isAuthUser(false));
    }
  })
};
export const loginUser = (email, password) => (dispatch) => {
  return api.login(email, password).then((data) => {
    if (data.is_staff) {
      dispatch(getAuthUserThunk());
      return data
    } else {
      dispatch(setAuthError("Ошибка авторизации! Повторите попытку."));
      dispatch(isAuthUser(false));
      return data
    }
  })
};
export const logoutUser = () => (dispatch) => {
  return api.logout().then((data) => {
    if (data !== undefined) {
      dispatch(getAuthUserThunk());
    } else {
      dispatch(getAuthUserThunk());
      dispatch(setLogoutError("Ошибка связи с сервером! Повторите попытку."));
    }
  })
};
