import React, { useState, useContext } from "react";
import AppContext from "@context/AppContext";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import menuIcon from "@icons/icon_menu.svg";
import logoYardSale from'@logos/logo_yard_sale.svg'
import shoppingCarIcon from '@icons/icon_shopping_cart.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav>
      <img src={menuIcon} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logoYardSale} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All-</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggleMenu}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCarIcon} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
          </li>
        </ul>
      </div>
      {isMenuOpen && <Menu />}
    </nav>
  );
};

export default Header;
