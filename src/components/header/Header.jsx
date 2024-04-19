import './header.css';
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoShop from '../logo/LogoShop';
import ProfileBar from '../profileBar/ProfileBar';
import Button from '@mui/material/Button';


export function Header({ isAuth }) {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="header-block">
      <div className="header-block__login">
        <LogoShop />
        {isAuth ?
        <ProfileBar /> :
        <Button onClick={handleLogin} >Sign in</Button>}
      </div>
      <div className="header-block__navigate">
        <nav>
          <ul>

            <li><NavLink to="/">Главная</NavLink></li>
            {isAuth ?
              <>
                <li><NavLink to="/collection">Просмотр коллекции</NavLink></li>
                <li><NavLink to="/bookmark">Книги в закладках</NavLink></li>
              </>
              : null}
          </ul>
        </nav>
      </div>
    </header>
  );
};