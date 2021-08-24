//eslint-disable-next-line
import React, { components } from "react";

class Customer extends React.Component {
  // eslint-disable-next-line react/require-render-return
  render() {
    return (
      <div>
        <h2>{this.props.id}</h2>
        <img src={this.props.image} alt="profile" />
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;
