import React from "react";
import "../css/EloInfo.css";
import elo from "../img/emblems/Emblem_Challenger.png";
import Matches from "../Components/Matches";
import Jhin from "../img/champions/Jhin.png";
import Aatrox from "../img/champions/Aatrox.png";

function EloInfo(props) {
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const soloq = props.data.soloq;
  const flex = props.data.flex;

  if (true) {
    return (
      <React.Fragment>
        <div className="soloq">
          <div className="col1">
            <div className="row0">
              {/* {props.data.summoner.name} */}
              rektes
            </div>
            <div className="row1 elo-container">
              <img
                // src={require(`../img/emblems/Emblem_${capitalize(
                //   soloq.division.toLowerCase()
                // )}.png`)}
                src={elo}
                alt=""
                className="elo-img"
              />
            </div>
            <div className="row2 text-center">
              ORO 4{/* {soloq.division + " " + soloq.rank} */}
            </div>
          </div>
          <div className="col2">
            <div className="row3-1">
              <select name="" id="" className="form-control queue">
                <option value="">SoloQ</option>
                <option value="">Flex</option>
              </select>
            </div>
            <div className="row3 data-wr">
              <div className="wins">
                {/* {soloq.wins} */}
                20
                <span style={{ color: "#37B03F" }}>W</span>
              </div>
              <div className="loses">
                {/* {soloq.losses} */}
                30
                <span style={{ color: "#F94848" }}>L</span>
              </div>
              <div className="wr" style={{ color: "black" }}>
                {/* {soloq.winrate}% WR */}
                56%
              </div>
            </div>
            <div className="row3">
              {/* {soloq.lp} LP */}
              25 LP
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
}

export default EloInfo;
