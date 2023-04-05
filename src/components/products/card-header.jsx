import React, { Component } from "react";
import iconHeartEmpty from "../../images/icons/icon-heart-empty.svg";
import iconHeartFilled from "../../images/icons/icon-heart-filled.svg";
import iconHeartCompare from "../../images/icons/icon-compare.svg";
import iconHeartCompareFilled from "../../images/icons/icon-compare-filled.svg";

class CardHeader extends Component {
  constructor(props) {
    super(props);

    this.handleWishListClick = this.handleWishListClick.bind(this);
    this.handleCompareClick = this.handleCompareClick.bind(this);
  }

  handleWishListClick(e) {
    this.props.onWishListClick(+e.target.dataset.id);
  }

  handleCompareClick(e) {
    this.props.onCompareClick(+e.target.dataset.id);
  }

  render() {
    const { productId, tag, isInCompareList, isInWishList } = this.props.headerData;
    const wishListIconName = isInWishList ? "icon-heart-filled.svg" : "icon-heart-empty.svg";
    const wishListIcon = isInWishList ? iconHeartFilled : iconHeartEmpty;
    const compareIconName = isInCompareList ? "icon-compare-filled.svg" : "icon-compare-filled.svg";
    const compareIcon = isInCompareList ? iconHeartCompareFilled : iconHeartCompare;
    const labelClassName =
      tag?.name.toLowerCase() === "action"
        ? "card-header__label-title card-header__label-title_red"
        : "card-header__label-title";

    return (
      <div className="card-header">
        <div className="card-header__label">{tag && <div className={labelClassName}>{tag.title}</div>}</div>
        <div className="card-header__actions">
          <div className="card-header__action-wishlist">
            <img
              className="card-header__action-img"
              src={wishListIcon}
              alt={wishListIconName}
              onClick={this.handleWishListClick}
              data-id={productId}
            />
          </div>
          <div className="card-header__action-compare">
            <img
              className="card-header__action-img"
              src={compareIcon}
              alt={compareIconName}
              onClick={this.handleCompareClick}
              data-id={productId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardHeader;
