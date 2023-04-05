import React, { Component } from "react";
import CardHeader from "./card-header";
import CardImage from "./card-image";
import CardPrice from "./card-price";
import CardStatus from "./card-status";
import Description from "../description";
import Reviews from "../reviews";

class Card extends Component {
  render() {
    const {
      id,
      tag,
      isInCompareList,
      isInWishList,
      image,
      pictogram,
      title,
      comments,
      oldPrice,
      price,
      isInCart,
      status,
      sellStatus,
    } = this.props.productData;
    const headerData = { productId: id, tag, isInCompareList, isInWishList };
    const descriptionClassName = status === "active" ? "card-title" : "card-title card-title_inactive";

    return (
      <div className="product-card">
        <CardHeader
          headerData={headerData}
          onWishListClick={this.props.onWishListClick}
          onCompareClick={this.props.onCompareClick}
        />
        <CardImage imageSRC={image} status={status} pictogram={pictogram} />
        <Description className={descriptionClassName} title={title} />
        <Reviews comments={comments} />
        <CardPrice
          productId={id}
          oldPrice={oldPrice}
          price={price}
          isInCart={isInCart}
          status={status}
          onAddToCartClick={this.props.onAddToCartClick}
        />
        <CardStatus status={status} sellStatus={sellStatus} />
      </div>
    );
  }
}

export default Card;
