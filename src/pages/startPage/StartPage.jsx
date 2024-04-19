import React from "react";
import "./startPage.css";
import BannersCarousel from "../../components/bannersCarousel/BannersCarousel";
import BooksCarousel from "../../components/booksCarousel/BooksCarousel";

export function StartPage( { banners, books } ) {

  return (
    <div className="start-page">
        <div className="start-page__carousel">
          <BannersCarousel banners={banners} />
        </div>
        <div className="start-page__second-block">
          <h2>Книги Бестеллеры</h2>
          <BooksCarousel books={books} />
        </div>
    </div>
  )
};