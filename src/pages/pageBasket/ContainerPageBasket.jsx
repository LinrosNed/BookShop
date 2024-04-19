import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageBasket } from "./PageBasket";
import { getBooksThunk, setBasketBookDeleteThunk } from "../../redux/reducer";

function ContainerPageBasket() {

  const dispatch = useDispatch();
  const { basket, downloadedBooks } = useSelector((state) => state.infoBookReducer);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    dispatch(getBooksThunk());
  }, [dispatch]);

  useEffect(() => {
    // Сравнить ключи (book) в basket и ключи (id) в downloadedBooks
    const filtered = downloadedBooks.filter(book => {
      return basket.find(basket => basket.book === book.id);
    });
    setFilteredBooks(filtered);
  }, [basket, downloadedBooks]);

  function setBasketDeleteBook(bookId) {
    // Ищем объект в корзине с соответствующим bookId и возвращаем его id
    const foundItem = basket.find(book => book.book === bookId);
    if (foundItem) {
      const { id } = foundItem;
      dispatch(setBasketBookDeleteThunk(id));
    }
  };

  return <PageBasket books={filteredBooks} setBasketDeleteBook={setBasketDeleteBook} />;
}

export default ContainerPageBasket;
