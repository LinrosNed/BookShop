import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import TreeView from "../treeView/TreeView";


function Sidebar({ genres }) {

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
              <TreeView genres={genres} />
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default React.memo(Sidebar);