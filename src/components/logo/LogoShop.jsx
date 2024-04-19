import React from "react";
import logo from '../../img/logo_shop.png';

function LogoShop() {
  
  return (
    <div className="logo-container">
      <img src={logo} alt="Логотип" />
      <div className="store-name">BookCodeHub</div>
    </div>
  );
}

export default React.memo(LogoShop);