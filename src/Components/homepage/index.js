import React from "react";
import Features from "./features";
import Games from "./games";
import MeetPlayers from "./meetPlayers";
import Promotion from "./jersey";
const Home = () => {
  return (
    <div className="bck_blue1">
      <Features />
      <Games />
      <MeetPlayers />
      <Promotion />
    </div>
  );
};

export default Home;
