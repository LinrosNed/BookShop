import React, { useEffect } from "react";
import { BooksGenres } from "./BooksGenres";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBooksThunk } from "../../redux/reducer";

function ContainerBooksGenres() {

  const dispatch = useDispatch();
  let { id } = useParams();
  const { downloadedBooks } = useSelector((state) => state.infoBookReducer);
  useEffect(() => {
    dispatch(getBooksThunk());
  }, [dispatch]);

  // Фильтрация книг по жанру
  const filteredBooks = downloadedBooks.filter(book =>
    book.genre.some(genre => genre.id === parseInt(id))
  );

  return ( <BooksGenres books={filteredBooks} /> );
};

export default ContainerBooksGenres;