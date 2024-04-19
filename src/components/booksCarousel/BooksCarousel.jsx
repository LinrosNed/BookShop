import React from "react";
import { CardCatalog } from "../cardForCatalog/CardForCatalog";

function BooksCarousel({ books }) {
  if (!books) {
    return null;
  }

  // Фильтруем книги, у которых есть img_cover
  const booksWithCover = books.filter((book) => book.img_cover !== null);

  // Выбираем случайные 5 книг
  const randomBooks = booksWithCover.slice(3, 7);

  return (
    <div className="booklist">
      {randomBooks.map((item, index) => (
        <CardCatalog
          key={index}
          id={item.id}
          img={item.img_cover}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default React.memo(BooksCarousel);
