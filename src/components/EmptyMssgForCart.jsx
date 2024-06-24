import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductActions } from "../store/addProductToCart";
import { cartActions } from "../store/cartValue";

function EmptyMssgForCart() {
  const dispatch = useDispatch();
  function handleStartShoppingBtn() {
    dispatch(addProductActions.placeOrderState());
  }
  return (
    <div className="empty-cart-container">
      <img
        src="/empty-cart-mssg2.png"
        alt="Empty Cart"
        className="empty-cart-image"
      />
      <h1>Your Shopping Cart is Empty.</h1>
      <p>Looks like you haven't added anything to your cart yet.</p>
      <Link
        to="/"
        className="shop-button"
        onClick={() => {
          handleStartShoppingBtn();
        }}
      >
        Start Shopping
      </Link>
    </div>
  );
}

export default EmptyMssgForCart;
