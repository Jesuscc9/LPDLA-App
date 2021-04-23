import React from "react";
import Match from "../Components/Match";

const Matches = ({ matches }) => {
  return (
    <React.Fragment>
      <div>
        {matches.map((match, i) => {
          const random = Math.floor(Math.random() * 3) + 1;
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
