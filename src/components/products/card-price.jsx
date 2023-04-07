import React from "react";
import iconBasket from "../../images/icons/icon-basket.svg";
import iconBasketFilled from "../../images/icons/icon-basket-filled.svg";

const CardPrice = (props) => {
  const handleAddToCartClick = (e) => {
    props.onAddToCartClick(+e.target.dataset.id);
  };

  const isActive = props.status === "active";
  const mainClassName = isActive ? "card-price" : "card-price card-price_inactive";
  const imageSRC = props.isInCart ? iconBasketFilled : iconBasket;
  const priceClassName =
    props.oldPrice > 0 ? "card-price__current-price card-price__current-price_hot" : "card-price__current-price";

  return (
    <div className={mainClassName}>
      <div className="card-price__price">
        {props.oldPrice > 0 && <div className="card-price__old-price">{props.oldPrice} ₴</div>}
        <div className={priceClassName}>{props.price} ₴</div>
      </div>
      {isActive && (
        <div className="card-price__cart">
          <img src={imageSRC} alt="icon-cart" onClick={handleAddToCartClick} data-id={props.productId} />
        </div>
      )}
    </div>
  );
};

export default CardPrice;
