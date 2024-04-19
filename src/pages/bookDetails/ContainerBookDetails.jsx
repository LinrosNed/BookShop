import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBookThunk, getCommentsBookThunk, setBasketBookAddThunk, setBookFavoriteAddThunk, setBookFavoriteDeleteThunk, setCommentBookAddThunk, setCommentBookDeleteThunk, setCommentBookEditThunk } from '../../redux/reducer';
import { Book } from './book/Book';

export function ContainerBookDetails() {

  let { bookId } = useParams();
  const dispatch = useDispatch();
  const { book, commentsBook, favorite, basket } = useSelector(state => state.infoBookReducer);
  const [orFavorite, setOrFavorite] = useState(false);
  const [orBasket, setOrBasket] = useState(false);


  useEffect(() => {
    dispatch(getBookThunk(bookId));
    dispatch(getCommentsBookThunk(bookId));
  }, [dispatch, bookId]);

  useEffect(() => {
    if (favorite) {
      const isBookFavorite = isBookInArray(book.id, favorite, 'id');
      setOrFavorite(isBookFavorite);
    }
  }, [favorite, book]);
  
  useEffect(() => {
    if (basket) {
      const isBookBasket = isBookInArray(book.id, basket, 'book');
      setOrBasket(isBookBasket);
    }
  }, [basket, book]);

  function isBookInArray(id, array, key) {
    return array.some(item => item[key] === id);
  }

  function manageComment(actionType, ...args) {
    switch(actionType) {
      case 'add':
        dispatch(setCommentBookAddThunk(...args));
        break;
      case 'edit':
        dispatch(setCommentBookEditThunk(...args));
        break;
      case 'delete':
        dispatch(setCommentBookDeleteThunk(...args));
        break;
      default:
        console.error('Invalid action type');
    }
  };

  function setFavorite(idBook) {
    if (!orFavorite) {
      dispatch(setBookFavoriteAddThunk(idBook))
      setOrFavorite(true)
    } else {
      dispatch(setBookFavoriteDeleteThunk(idBook))
      setOrFavorite(false)
    }
  };
  function setBasket() {
    if (!orBasket) {
      dispatch(setBasketBookAddThunk(bookId))
      setOrBasket(true)
    } else {
      return null
    }
  };

  return (
    <>
      {book ? (
        <Book book={book}
          comments={commentsBook}
          orFavorite={orFavorite}
          orBasket={orBasket}
          manageComment={manageComment}
          setFavorite={setFavorite}
          setBasket={setBasket}
        />) : (
        <p>Loading...</p>)}
    </>
  );
};