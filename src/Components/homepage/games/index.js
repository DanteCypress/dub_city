import React from "react";
import { Tag } from "../../UI/misc";
import Blocks from "./Blocks";
const GamesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag
          bck="#26282A"
          size="50px"
          color="#FDB927"
          //   add={{
          //     color: "red"
          //   }}
        >
          Games
        </Tag>
        <Blocks />
        <Tag
          bck="#26282A"
          size="22px"
          color="#FDB927"
          link={true}
          linkto="/the_team"
        >
          See more games
        </Tag>
      </div>
    </div>
  );
};

export default GamesHome;
