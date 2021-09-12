import React from "react";
import Match from "../Components/Match";
import { useSelector } from "react-redux";

const Matches = () => {
  const matches = useSelector((state) => state.data.matches);

  return (
    <React.Fragment>
      {matches.map((match, i) => {
        match.kda =
          Math.round(
            ((match.stats.stats.kills + match.stats.stats.assists) /
              match.stats.stats.deaths) *
              10
          ) / 10;
        const random = Math.floor(Math.random() * 9) + 1;
        return <Match data={match} emojiIndex={random} key={i} />;
      })}
    </React.Fragment>
  );
};

export default Matches;
