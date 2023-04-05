import React, { Component } from "react";
import iconTruck from "../../images/icons/icon-truck-deco.svg";

const PRODUCT_STATUSES = {
  unavailable: "Немає в наявності",
  available: "Готовий до відправлення",
  limited: "Закінчується",
  outOfStock: "Закінчився",
  waitingForSuplly: "Очікується",
};

class CardStatus extends Component {
  render() {
    const sellStatusText = <span className="product-status__title">{PRODUCT_STATUSES[this.props.sellStatus]}</span>;
    let icon = null;
    let className = "product-status";

    if (this.props.status === "active") {
      if (this.props.sellStatus === "limited") {
        className += " product-status_limited";
      } else {
        className += " product-status_available";
        icon = <img className="product-status__image" src={iconTruck} alt="truck" />;
      }
    } else {
      className += " product-status_unavailable";
    }

    return (
      <div className={className}>
        {sellStatusText}
        {icon}
      </div>
    );
  }
}

export default CardStatus;
