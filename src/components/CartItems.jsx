import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductActions } from "../store/addProductToCart";
import { cartActions } from "../store/cartValue";
import { MdDelete } from "react-icons/md";
function CartItems({ item }) {
  const { cartProducts } = useSelector((store) => store.addProductToCart);
  const dispatch = useDispatch();
  function handleCrossCartBtn() {
    dispatch(addProductActions.removeProductFromCart(item));
    dispatch(cartActions.decrementCartVal());
  }

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.imgSrc} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.author}</div>
        <div className="item-name">{item.title}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">
            {Math.floor(Math.random() * 15 + 1)} days
          </span>
          return available
        </div>
        <div className="delivery-details">
          Delivered by{" "}
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={() => handleCrossCartBtn()}>
        <MdDelete />
      </div>
    </div>
  );
}

export default CartItems;
