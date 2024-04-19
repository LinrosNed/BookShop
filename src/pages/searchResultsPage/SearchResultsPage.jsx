import React from "react";
import { CardCatalog } from "../../components/cardForCatalog/CardForCatalog";

export function SearchResultsPage(props) {

  function renderCardBlock() {

    let books = props.books;
    if (!books || books.length === 0) { return null }

    return books.map((item, index) => (
      <CardCatalog
        key={index}
        id={item.id}
        title={item.title}
        author={item.author}
        img={item.src.srcImg}
        bookmark={item.inBookmark}
        reating={item.reating}
      />
    ));
  }


  return (
    <div className="card-list">
      <div className="card-list__item">
        {renderCardBlock()}
      </div>
    </div>
  )
};