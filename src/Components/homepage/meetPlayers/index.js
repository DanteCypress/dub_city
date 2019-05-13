import React, { Component } from "react";
import bg from "../../../Resources/players/bg.png";
import { Tag } from "../../UI/misc";
import Reveal from "react-reveal/Reveal";
import HomeCards from "./cards";

export default class MeetPlayers extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
          console.log("reveal");
        }}
      >
        <div
          className="home_meetplayers"
          style={{
            background: `#fff url(${bg})`
          }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#26282A"
                    size="100px"
                    color="#fff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    Meet
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#26282A"
                    size="100px"
                    color="#fff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    The
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#26282A"
                    size="100px"
                    color="#fff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#006BB6"
                    size="27px"
                    color="#FDB927"
                    link={true}
                    linkto="/the_team"
                    add={{
                      display: "inline-block",
                      marginBottom: "27px",
                      border: "1px solid"
                    }}
                  >
                    Meet 'em here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}
