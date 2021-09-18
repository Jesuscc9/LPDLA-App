import React from "react";
import Match from "../Components/Match";
import { useSelector } from "react-redux";

const Matches = () => {
  let matches = useSelector((state) => state.data.matches);

  matches = matches.length > 1 ? matches.slice(0, 10) : undefined

  return (
    <>
      {matches && (
        <>
          {matches.map((match, i) => {
            match.kda =
              Math.round(
                ((match.stats.stats.kills + match.stats.stats.assists) /
                  match.stats.stats.deaths) *
                  10
              ) / 10;
            const random = Math.floor(Math.random() * 9) + 1;
            return (
              <Match key={match.gameId} data={match} emojiIndex={random} />
            );
          })}
        </>
      )}
    </>
  );
};

export default Matches;
