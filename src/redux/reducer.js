import api from '../api/api';

const GET_BANNERS = 'GET_BANNERS';
const GET_BOOKS = 'GET_BOOKS';
const GET_BOOK = 'GET_BOOK';
const GET_COMMENTS = 'GET_COMMENTS'
const SET_COMMENT_ADD = 'SET_COMMENT_ADD';
const SET_COMMENT_EDIT = 'SET_COMMENT_EDIT';
const SET_COMMENT_DELETE = 'SET_COMMENT_DELETE';
const GET_FAVORITE = 'GET_FAVORITE';
const GET_BASKET = 'GET_BASKET';
const GET_GENRES = 'GET_GENRES';

let initialState = {
  book: {
    id: null,
    genre: null,
    author: {
      id: null,
      name: null
    },
    comments_count: null,
    comments_stars_stat: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    },
    name: null,
    price: null,
    img_cover: null,
    description: null,
  },
  basket: null,
  commentsBook: [],
  genres: null,
  favorite: null,
  banners: [],
  downloadedBooks: [],
  isLoading: false,
};

export const infoBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNERS:
      return {
        ...state,
        banners: action.payload,
      };
    case GET_BOOKS:
      return {
        ...state,
        downloadedBooks: action.payload,
      };
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case GET_COMMENTS:
      const { comments, user_comment } = action.payload;
      return {
        ...state,
        commentsBook: {
          comments: comments,
          user_comment: user_comment
        }
      };
    case SET_COMMENT_EDIT:
      return {
        ...state,
        commentsBook: {
          ...state.commentsBook,
          user_comment: action.payload
        }
      };
    case SET_COMMENT_DELETE:
      return {
        ...state,
        commentsBook: {
          ...state.commentsBook,
          user_comment: '',
        }
      };
    case SET_COMMENT_ADD:
      const newComment = {
        id: action.payload.id,
        text: action.payload.text,
        stars: action.payload.stars,
      };
      const updatedComments = [newComment, ...state.book.comments];
      return {
        ...state,
        book: {
          ...state.book,
          comments: updatedComments,
        },
      };
    case GET_FAVORITE:
      return {
        ...state,
        favorite: action.payload
      };
    case GET_BASKET:
      return {
        ...state,
        basket: action.payload
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    default: return state;
  }
};


const actions = {
  getBanners: (action) => ({
    type: 'GET_BANNERS',
    payload: action,
  }),
  getBooks: (action) => ({
    type: 'GET_BOOKS',
    payload: action,
  }),
  getBook: (action) => ({
    type: 'GET_BOOK',
    payload: action,
  }),
  getComments: (action) => ({
    type: 'GET_COMMENTS',
    payload: action,
  }),
  setCommentAdd: (action) => ({
    type: 'SET_COMMENT_ADD',
    payload: action,
  }),
  setCommentEdit: (action) => ({
    type: 'SET_COMMENT_EDIT',
    payload: action,
  }),
  setCommentDelete: (action) => ({
    type: 'SET_COMMENT_DELETE',
    payload: action,
  }),
  getFavorite: (action) => ({
    type: 'GET_FAVORITE',
    payload: action,
  }),
  getBasket: (action) => ({
    type: 'GET_BASKET',
    payload: action,
  }),
  toggleIsLoading: (action) => ({
    type: 'IS_LOADING',
    payload: action,
  }),
  getGenres: (action) => ({
    type: 'GET_GENRES',
    payload: action,
  }),
};
export default actions;

export const getBannerThunk = () => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    const data = await api.getBanners();
    dispatch(actions.getBanners(data));
  } catch (error) {
    console.error('Error get banners', error);
  } finally {
    dispatch(actions.toggleIsLoading(false));
  }
};
export const getBooksThunk = () => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    const data = await api.getBooks();
    dispatch(actions.getBooks(data));
  } catch (error) {
    console.log('Error get books', error);
  } finally {
    dispatch(actions.toggleIsLoading(false));
  }
};
export const getBookThunk = (id) => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    const data = await api.getBook(id);
    dispatch(actions.getBook(data));
  } catch (error) {
    console.log('Error get book', error);
  } finally {
    dispatch(actions.toggleIsLoading(false));
  }
};
export const getCommentsBookThunk = (id) => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    const dataComments = await api.getCommentsBook(id);
    dispatch(actions.getComments(dataComments));
  } catch (error) {
    console.log('Error get comments', error);
  } finally {
    dispatch(actions.toggleIsLoading(false));
  }
};
export const setCommentBookAddThunk = (idBook, text, stars) => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    const data = await api.setCommentBookAdd(idBook, text, stars);
    dispatch(actions.setCommentAdd(data));
  } catch (error) {
    console.log('Error set comment book', error);
  } finally {
    dispatch(getCommentsBookThunk(idBook));
    dispatch(actions.toggleIsLoading(false));
  }
};
export const setCommentBookEditThunk = (idComment, text, stars) => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    const data = await api.setCommentBookEdit(idComment, text, stars);
    dispatch(actions.setCommentEdit(data));
  } catch (error) {
    console.log('Error set comment book', error);
  } finally {
    dispatch(actions.toggleIsLoading(false));
  }
};
export const setCommentBookDeleteThunk = (idComment) => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    await api.setCommentBookDelete(idComment);
    dispatch(actions.setCommentDelete(''));
  } catch (error) {
    console.log('Error set comment delete', error);
  } finally {
    dispatch(actions.toggleIsLoading(false));
  }
};
export const getBookFavoriteThunk = () => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    const data = await api.getFavoriteBook();
    dispatch(actions.getFavorite(data));
  } catch (error) {
    dispatch(actions.getFavorite(null));
  } finally {
    dispatch(actions.toggleIsLoading(false));
  }
};
export const setBookFavoriteAddThunk = (idBook) => async (dispatch) => {
  try {
    await api.setBookFavoriteAdd(idBook);
  } catch (error) {
    console.log('Error set favorite add', error);
  } finally {
    dispatch(getBookFavoriteThunk());
  }
};
export const setBookFavoriteDeleteThunk = (idBook) => async (dispatch) => {
  try {
    await api.setBookFavoriteDelete(idBook);
  } catch (error) {
    console.log('Error set favorite delete', error);
  } finally {
    dispatch(getBookFavoriteThunk());
  }
};
export const getBasketThunk = () => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    const data = await api.getBasket();
    dispatch(actions.getBasket(data));
  } catch (error) {
    dispatch(actions.getBasket(null));
  } finally {
    dispatch(actions.toggleIsLoading(false));
  }
};
export const setBasketBookAddThunk = (idBook) => async (dispatch) => {
  try {
    await api.setBasketBookAdd(idBook);
  } catch (error) {
    console.log('Error set book basket add', error);
  } finally {
    dispatch(getBasketThunk());
  }
};
export const setBasketBookDeleteThunk = (idBookBasket) => async (dispatch) => {
  try {
    await api.setBasketBookDelete(idBookBasket);
  } catch (error) {
    console.log('Error set book basket add', error);
  } finally {
    dispatch(getBasketThunk());
  }
};
export const getGenresThunk = () => async (dispatch) => {
  try {
    dispatch(actions.toggleIsLoading(true));
    const data = await api.getGenres();
    dispatch(actions.getGenres(data));
  } catch (error) {
    console.log('Error get list genres', error);
  } finally {
    dispatch(actions.toggleIsLoading(false));
  }
};