import React, { Component } from "react";

class CardPictogram extends Component {
  render() {
    return <img className="card-pictogram__image" src={this.props.imageSRC} alt={this.props.title} />;
  }
}

export default CardPictogram;
