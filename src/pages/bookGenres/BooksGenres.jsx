import React from "react";
import { CardCatalog } from "../../components/cardForCatalog/CardForCatalog";

export function BooksGenres(props) {

  function renderCardBlock() {
    let books = props.books;
    if (!books || books.length === 0) { return null };

    return books.slice(0, 15).map((item, index) => (
      <CardCatalog
        key={index}
        id={item.id}
        title={item.name}
        author={item.author.name}
        img={item.img_cover}
        price={item.price}
      />
    ))};

  return (
    <div className="card-list">
      <div className="card-list__item"> {renderCardBlock()} </div>
    </div>
  )
};