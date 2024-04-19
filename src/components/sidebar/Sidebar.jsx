import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";


function Sidebar({ genres }) {

  const listGenres = (genres) => {
    if (Array.isArray(genres) && genres.length > 0) {
      return genres.map(genre => (
        <li key={genre.id}>
          <NavLink to={`/genre/${genre.id}`}>
            <span>{genre.name}</span>
          </NavLink>
        </li>
      ))
    }
  };
  
  return (
    <aside className="sidebar-block">
      <ul className="sidebar-discount__list">
        <li>
          <span>Акции %</span>
        </li>
        <li>
          <span>Скидки!</span>
        </li>
      </ul>
      <nav className="sidebar-base">
        <ul className="sidebar-base__list">
          <li>
            <NavLink to="/">
              <span role="img" className="sidebar-icon">&#x1F3E0;</span>
              <span>Главная</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/collection">
              <span role="img" className="sidebar-icon">&#x1F4D6;</span>
              <span>Просмотр коллекции</span>
            </NavLink>
          </li>
          <li>
                <ul className="sidebar-genres">
                  {listGenres(genres)}
                </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default React.memo(Sidebar);