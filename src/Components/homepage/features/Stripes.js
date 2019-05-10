import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
export class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "#006BB6"
      },
      {
        background: "#FDB927"
      },
      {
        background: "#26282A"
      }
    ]
  };
  showStripes = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: "#ffffff"
        }}
        enter={{
          background: `${stripe.background}`
        }}
      >
        {({ background }) => {
          return (
            <div
              className="stripe"
              style={{
                background
              }}
            />
          );
        }}
      </Animate>
    ));
  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
