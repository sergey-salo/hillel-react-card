import React, { Component } from "react";

class Description extends Component {
  render() {
    return <div className={this.props.className}>{this.props.title}</div>;
  }
}

export default Description;
