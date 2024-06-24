import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartValue";
import { addProductActions } from "../store/addProductToCart";
import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartVal } = useSelector((store) => store.cart);
  const { removeFromCart } = useSelector((store) => store.addProductToCart);

  const isProductInCart = removeFromCart.some((item) => item.id === product.id);

  function handleAddToCart() {
    dispatch(cartActions.incrementCartVal());
    dispatch(addProductActions.addProductToCart(product));
    dispatch(addProductActions.removerFromCartState(product));
  }

  function handleRemoveFromCart() {
    if (cartVal > 0) {
      dispatch(cartActions.decrementCartVal());
      dispatch(addProductActions.addToCartState(product));
      dispatch(addProductActions.removeProductFromCart(product));
    }
  }

  function handleBuyNow() {
    dispatch(addProductActions.buyProduct(product));
    // navigate("/returnsAndorders");
  }

  return (
    <div className="card">
      <img src={product.imgSrc} alt="Product Image" />
      <div className="card-content">
        <h3>{product.title}</h3>
        <p className="author">&gt; {product.author}</p>
        <p className="price">
          ₹{product.current_price}
          <span className="discount">₹{product.original_price}</span>
          <span className="discountPercentage">
            &#x28;{product.discount_percentage} %off&#x29;
          </span>
        </p>
        <p className="reviews">
          <span className="stars">★★★★☆</span> ({product.reviews.count} reviews)
        </p>
        <p className="delivery">
          Get it by <strong>{product.delivery_date}</strong>
        </p>
        {isProductInCart ? (
          <button className="removeFromCart" onClick={handleRemoveFromCart}>
            Remove From Cart
          </button>
        ) : (
          <button className="addToCartBtn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
        <button className="buyBtn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
