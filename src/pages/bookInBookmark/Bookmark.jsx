import React from "react";
import { CardCatalog } from "../../components/cardForCatalog/CardForCatalog";

export function Bookmark(props) {

  function renderCardBlock() {
    let favorite = props.favorite;
    if (!Array.isArray(favorite) || favorite.length === 0) {
      return null; // Возвращаем null, если favorite не является массивом или пустым массивом
    }
  
    return favorite.map((item, index) => (
      <CardCatalog
        key={index}
        id={item.id}
        title={item.name}
        author={item.author.name}
        img={item.img_cover}
        price={item.price}
      />
    ));
  }
  

  return (
    <div className="card-list__item">
      {renderCardBlock()}
    </div>
  )
};
