import React, { Component } from "react";
import iconBasket from "../../images/icons/icon-basket.svg";
import iconBasketFilled from "../../images/icons/icon-basket-filled.svg";

class CardPrice extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
  }

  handleAddToCartClick(e) {
    this.props.onAddToCartClick(+e.target.dataset.id);
  }

  render() {
    const priceClassName =
      this.props.oldPrice > 0 ? "card-price__current-price card-price__current-price_hot" : "card-price__current-price";

    const isActive = this.props.status === "active";
    const mainClassName = isActive ? "card-price" : "card-price card-price_inactive";
    const imageSRC = this.props.isInCart ? iconBasketFilled : iconBasket;

    return (
      <div className={mainClassName}>
        <div className="card-price__price">
          {this.props.oldPrice > 0 && <div className="card-price__old-price">{this.props.oldPrice} ₴</div>}
          <div className={priceClassName}>{this.props.price} ₴</div>
        </div>
        {isActive && (
          <div className="card-price__cart">
            <img src={imageSRC} alt="icon-cart" onClick={this.handleAddToCartClick} data-id={this.props.productId} />
          </div>
        )}
      </div>
    );
  }
}

export default CardPrice;
