import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addProductActions } from "../store/addProductToCart";
import Loader from "../components/Loader";
import products from "./ProductsListObject";
function CardsList() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch("http://localhost:8080/items")
  //     .then((data) => data.json())
  //     .then((data) =>
  //       dispatch(addProductActions.actualDataFunction(data.items))
  //     );
  // }, []);
  // const { actualData } = useSelector((store) => store.addProductToCart);
  return (
    <div className="card-container">
      {products.map((product) => {
        return <Card product={product} key={Math.random() * 5} />;
      })}
    </div>
  );
}

export default CardsList;
