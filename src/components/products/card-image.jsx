import React from "react";
import CardPictogram from "./card-pictogram";

const CardImage = (props) => {
  const isActive = props.status === "active";
  const mainClassName = isActive ? "card-image" : "card-image card-image_inactive";
  const pictogram = props.pictogram;

  return (
    <div className={mainClassName}>
      <img className="card-image__product" src={props.imageSRC} alt="product" />
      {pictogram && <CardPictogram imageSRC={pictogram.image} title={pictogram.title} />}
    </div>
  );
};

export default CardImage;
