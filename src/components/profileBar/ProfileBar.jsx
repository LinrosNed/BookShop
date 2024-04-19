import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountMenu from '../AccountMenu/AccountMenu';
import Basket from '../basket/Basket';
import Favorites from '../favorites/Favorites';

function ProfileBar() {

  const { favorite, basket } = useSelector((state) => state.infoBookReducer);
  const countBookFavorite = favorite ? favorite.length : 0;
  const countBookBasket = basket ? basket.length : 0;

  return (
    <div className="profile-bar">
      <NavLink to="/bookmark">
        <div className="favorites">
          <Favorites countBookFavorite={countBookFavorite} />
        </div>
      </NavLink>
      <NavLink to="/basket">
        <div className="basket">
          <Basket countBookBasket={countBookBasket} />
        </div>
      </NavLink>
      <div className="login_user">
        <AccountMenu />
      </div>
    </div>
  )
}

export default ProfileBar;
