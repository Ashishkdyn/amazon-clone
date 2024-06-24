import React from "react";
import { useSelector } from "react-redux";

function OrderHeader() {
  const { buyProduct } = useSelector((store) => store.addProductToCart);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let totalRs = 0;
  let date = new Date();
  buyProduct.map((item) => {
    return (totalRs += item.current_price);
  });
  return (
    <>
      <h1>Returns & Orders</h1>
      <div className="order">
        <div className="order-header">
          <h5>
            Order Placed:{" "}
            {`${date.getDate()} ${
              months[date.getMonth()]
            } ${date.getFullYear()}`}
          </h5>
          <h5>Total: ₹{totalRs + 99}</h5>
          <h5>Order #: 123-4567890-1234567</h5>
        </div>
      </div>
    </>
  );
}

export default OrderHeader;
