import React from "react";
import CartSummary from "./CartSummary";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import EmptyMssgForCart from "./EmptyMssgForCart";
function Cart() {
  const { cartProducts } = useSelector((store) => store.addProductToCart);

  const item = {
    id: "001",
    imgSrc: "/crushIt.jpg",
    author: "Carlton London",
    title: "Rhodium-Plated CZ Floral Studs",
    original_price: 999,
    current_price: Math.ceil(999 - (999 * 42) / 100),
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };

  return (
    <main>
      {cartProducts.length <= 0 ? (
        <EmptyMssgForCart />
      ) : (
        <div className="bag-page">
          <div className="bag-items-container">
            {cartProducts.map((item) => {
              return <CartItems item={item} key={item.id} />;
            })}
          </div>
          <div className="bag-summary">
            <CartSummary />
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
