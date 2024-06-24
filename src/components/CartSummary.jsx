import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductActions } from "../store/addProductToCart";
import { cartActions } from "../store/cartValue";

function CartSummary() {
  const { cartProducts } = useSelector((store) => store.addProductToCart);
  const { buyProduct } = useSelector((store) => store.addProductToCart);
  const dispatch = useDispatch();

  let totalMrp1 = 0;
  let totalDiscount1 = 0;
  cartProducts.map((item) => {
    totalMrp1 += item.original_price;
    totalDiscount1 += item.original_price - item.current_price;
  });
  const summary = {
    totalItem: cartProducts.length,
    totalMRP: totalMrp1,
    totalDiscount: totalDiscount1,
    finalPayment: totalMrp1 - totalDiscount1 + 99,
  };

  function handlePlaceOrderBtn() {
    dispatch(addProductActions.placeOrderState());
    dispatch(addProductActions.placeOrderToReturnsAndorders(cartProducts));
    dispatch(cartActions.zeroCartVal());
  }
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({summary.totalItem}{" "}
          {summary.totalItem > 1 ? "items" : "item"})
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{summary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{summary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{summary.finalPayment}</span>
        </div>
      </div>
      <Link
        to="/thanksForOrder"
        className=" place-order"
        onClick={() => handlePlaceOrderBtn()}
      >
        <div className="btn-place-order">Place Order</div>
      </Link>
    </>
  );
}

export default CartSummary;
