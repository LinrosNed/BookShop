import React from "react";
import { NavLink } from "react-router-dom";
import "./cardForCatalog.css";
import Favorites from "../favorites/Favorites";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Button from '@mui/material/Button';


export function CardCatalog({ img, id, title, author, price, setBasketDeleteBook }) {

  const { favorite } = useSelector((state) => state.infoBookReducer);
  const [orFavorite, setOrFavorite] = useState(false);

  function isBookInFavorites(id, favorites) {
    return favorites.some(item => item.id === id);
  };

  useEffect(() => {
    if (favorite) {
      const isBookFavorite = isBookInFavorites(id, favorite);
      setOrFavorite(isBookFavorite);
    }
  }, [favorite, id]);

  function addImage() {
    if (!img) {
      return null
    } else {
      return img
    }
  };

  function choiceNavigate() {
    if (img) {
      return "/bookDetails/" + id
    }
  };

  function deleteBookOrBasket() {
    setBasketDeleteBook(id)
  };

  return (
    <div className="cardCatalog" >
      <NavLink to={choiceNavigate()} className="cardCatalog__img">
        <img src={addImage()} alt="" />
      </NavLink>
      <div className="cardCatalog__item">
        <div className="cardCatalog__title">{title}</div>
        <NavLink>
          <div className="cardCatalog__author">{author}</div>
        </NavLink>
        <div className="cardCatalog__rating">$ {price}</div>
      </div>
      {!setBasketDeleteBook ? null : <Button size="small" variant="contained" onClick={deleteBookOrBasket} >Убрать из корзины</Button>}
      <div className="cardCatalog__bookmark-label">
        <Favorites orFavorite={orFavorite} />
      </div>
    </div>
  )
};