import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReturnsAndOrdersCard from "./ReturnsAndOrdersCard";
import OrderHeader from "./OrderHeader";
import NoOrders from "./NoOrders";
function ReturnsAndOrders() {
  const { buyProduct } = useSelector((store) => store.addProductToCart);

  return (
    <main className="main-content">
      {buyProduct.length > 0 ? <OrderHeader /> : <NoOrders />}

      {buyProduct.map((item) => {
        return <ReturnsAndOrdersCard item={item} key={item.id} />;
      })}
    </main>
  );
}

export default ReturnsAndOrders;
