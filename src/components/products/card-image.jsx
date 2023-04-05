import React, { Component } from "react";
import CardPictogram from "./card-pictogram";

class CardImage extends Component {
  render() {
    const isActive = this.props.status === "active";
    const mainClassName = isActive ? "card-image" : "card-image card-image_inactive";
    const pictogram = this.props.pictogram;

    return (
      <div className={mainClassName}>
        <img className="card-image__product" src={this.props.imageSRC} alt="product" />
        {pictogram && <CardPictogram imageSRC={pictogram.image} title={pictogram.title} />}
      </div>
    );
  }
}

export default CardImage;
