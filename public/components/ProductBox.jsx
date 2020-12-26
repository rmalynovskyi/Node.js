import React from "react";

export default class ProductBox extends React.Component {
  render() {
    return <div class={this.props.className}>
     {this.props.children}
      </div>;
  }
}
