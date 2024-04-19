import React from "react";
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export function BookDetailsHeader({ name, id, genre, price, author, img_cover, comments_stars_stat, comments_count, orFavorite, setFavorite, orBasket, setBasket }) {

  //обработка изображений
  const addImageBook = () => img_cover || '';

  const genreValue = (genre) => {
    if (genre && genre.length > 0) {
      // строка с именами через запятую
      const genreNames = genre.map(genreItem => genreItem.name).join(', ');
      return <span>{genreNames}</span>;
    } else {
      return null;
    }
  };

  const computeAverageRating = () => {
    if (!comments_count) {
      return 0;
    }
    let totalStars = 0;
    for (let stars in comments_stars_stat) {
      totalStars += Number(stars) * comments_stars_stat[stars];
    }
    return Math.round(totalStars / comments_count);
  };

  const favoriteBook = () => {
    setFavorite(id);
  };
  const basketBook = () => {
    setBasket()
  };

  return (
    <div className="book__header">
      <Paper className="book__img" >
        <div className="bookmark-label"></div>
        <img src={addImageBook()} alt="" />
      </Paper>
      <div className="book__list">
        <div className="book__title">{name}</div>
        <div className="book__author">{author}</div>
        <div>{genreValue(genre)}</div>
        <Rating name="size-small" value={computeAverageRating()} size="small" />
        <div className="book__price">$ {price}</div>
        <div className="book__btns">
          <Button size="small" variant="contained" onClick={favoriteBook} >{!orFavorite ? "Добавить в избранное" : "В избранном"}</Button>
          <Button size="small" variant="contained" disabled={orBasket} onClick={basketBook} >{!orBasket ? "Добавить в корзину" : "В корзине"}</Button>
        </div>
      </div>
    </div>
  )
};