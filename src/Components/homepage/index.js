import React from "react";
import Features from "./features";
import Games from "./games";
import MeetPlayers from "./meetPlayers";
const Home = () => {
  return (
    <div className="bck_blue1">
      <Features />
      <Games />
      <MeetPlayers />
    </div>
  );
};

export default Home;
