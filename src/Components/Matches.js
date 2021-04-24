import React from "react";
import Match from "../Components/Match";

const Matches = ({ matches }) => {
  return (
    <React.Fragment>
      <div>
        {matches.map(function (match, i) {
          match.kda =
            Math.round(
              ((match.stats.stats.kills + match.stats.stats.assists) /
                match.stats.stats.deaths) *
                10
            ) / 10;
          const random = Math.floor(Math.random() * 9) + 1;
          return (
            <React.Fragment key={i}>
              <Match data={match} emojiIndex={random} />
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Matches;
