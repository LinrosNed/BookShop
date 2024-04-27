import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import './booksCollection.css';
import { CardCatalog } from "../../components/cardForCatalog/CardForCatalog";


export function BooksCollection(props) {

  const [currentPage, setCurrentPage] = useState(0);

  let books = props.books;
  if (!books || books.length === 0) { return null };

  // Отображаем только книги для текущей страницы
  const booksOnCurrentPage = books.slice(currentPage * 8, (currentPage + 1) * 8);

  return (
    <div className="card-list">
      <div className="card-list__item">
        {booksOnCurrentPage.map((item, index) => (
          <CardCatalog
            key={index}
            id={item.id}
            title={item.name}
            author={item.author.name || null}
            img={item.img_cover}
            price={item.price}
          />
        ))}
      </div>
      <ReactPaginate
        previousLabel={'Назад'}
        nextLabel={'Вперед'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(props.books.length / 8 - 1)} // Общее количество страниц
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => setCurrentPage(selected)} // Обновляем текущую страницу при клике
        containerClassName={'pagination'}
        activeClassName={'activePage'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        forcePage={currentPage} // Текущая страница
      />
    </div>
  )
};