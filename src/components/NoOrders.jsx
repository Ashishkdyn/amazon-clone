import React from "react";
import { TbShoppingCartOff } from "react-icons/tb";
import { Link } from "react-router-dom";

function NoOrders() {
  return (
    <section className="no-orders">
      <div className="no-orders-icon">
        <TbShoppingCartOff />
      </div>
      <h1>No Orders Yet</h1>
      <p>It looks like you haven't placed any orders yet.</p>
      <Link to="/" className="shop-now-button">
        Shop Now
      </Link>
    </section>
  );
}

export default NoOrders;
