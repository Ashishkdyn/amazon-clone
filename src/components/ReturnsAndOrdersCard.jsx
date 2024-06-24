import React from "react";
import { addProductActions } from "../store/addProductToCart";
import { useDispatch } from "react-redux";

function ReturnsAndOrdersCard({ item }) {
  const dispatch = useDispatch();

  function returnBtnHandler() {
    dispatch(addProductActions.returnItem(item));
  }

  return (
    <main>
      <div className="order-details">
        <div className="product">
          <div className="product-img">
            <img src={item.imgSrc} alt="Product Image" />
          </div>
          <div className="product-info">
            <div>
              <h2>{item.title}</h2>
              <p>Sold by: {item.author}</p>
              <h5>₹ {item.current_price}</h5>
              <button
                className="return-btn"
                onClick={() => {
                  returnBtnHandler();
                }}
              >
                Return Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ReturnsAndOrdersCard;
