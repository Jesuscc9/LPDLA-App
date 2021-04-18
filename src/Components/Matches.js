import React from "react";
import Match from "../Components/Match";

function Matches(props) {
  let searched = false;
  if (
    Object.keys(props.data).length === 0 &&
    props.data.constructor === Object
  ) {
    return (
      <React.Fragment>
        <p></p>
      </React.Fragment>
    );
  } else {
    let matches = [];

    let match = {
      champ: "",
      line: "",
      damage: "",
      status: "",
      kda: "",
      kda2: "",
      cs: "",
      cs2: "",
      damage: "",
      damage2: "",
      minutes: "",
      gameType: "",
    };

    if (props.data.matches.length >= 10 && !searched) {
      for (let i = 0; i < 10; i++) {
        async function match() {
          let res = await fetch(
            props.data.endpoint + props.data.matches[i].gameId + props.data.api
          );
          res.json().then((res) => {
            console.log("Aver: ", res)
          });
        }
        match();
      }
      searched = true;
    }

    return (
      <React.Fragment>
        <div className="matches">
          {Object.keys(props.data.matches).map((match, i) => {
            return (
              <React.Fragment key={i}>
                <Match />
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }

  /*for(let i = 0;i<props.data.matches.length;i++){
    matches.push(props.data.matches[i]);
  }*/
}

export default Matches;
