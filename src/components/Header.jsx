import React, { useRef } from "react";
import css from "../css modules/Header.module.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductActions } from "../store/addProductToCart";

function Header() {
  const { cartVal } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function handleAmazonLogoBtn() {
    if (cartVal === 0) {
      dispatch(addProductActions.removeFromCartState2ndVersion());
    }
  }
  function handleSearchBtn(event) {
    console.log(event.target.value);
  }
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/" className={css.amazonATag} onClick={handleAmazonLogoBtn}>
            <img src="/amazon-logo3.png" alt="Amazon Logo" />
            <span className={css.dotInSpan}>.in</span>
          </Link>
        </div>
        <div className="search-bar">
          <CiSearch className={css.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => handleSearchBtn(event)}
          />
          <button type="submit" onClick={() => handleSearchBtn()}>
            Search
          </button>
        </div>
        <div className="nav-links">
          <a href="#">Hello, Sign in</a>
          <Link to="/returnsAndorders" className="returnsAndOrders">
            Returns & Orders
          </Link>
          <Link to="/cart" className="cartLink">
            Cart
            <span className="cartValue">{cartVal}</span>
          </Link>
        </div>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#">Best Sellers</a>
          </li>
          <li>
            <a href="#">Mobiles</a>
          </li>
          <li>
            <a href="#">Today's Deals</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
