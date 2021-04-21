import React from "react";
import Match from "../Components/Match";

const Matches = ({matches}) =>{

  return (
    <React.Fragment>
      <div className="matches">
        {matches.map((match, i) => {
          return (
            <React.Fragment key={i}>
              <Match data={match}/>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Matches;
