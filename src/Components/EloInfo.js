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

  if (soloq != undefined) {
    return (
      <React.Fragment>
        <div className="soloq">
          <div className="col1">
            <div className="row0">{props.data.summoner.name}</div>
            <div className="row1 elo-container">
              <img
                src={require(`../img/emblems/Emblem_${capitalize(
                  soloq.division.toLowerCase()
                )}.png`)}
                alt=""
                className="elo-img"
              />
            </div>
            <div className="row2 text-center">
              {soloq.division + " " + soloq.rank}
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
                {soloq.wins}
                <span style={{ color: "#37B03F" }}>W</span>
              </div>
              <div className="loses">
                {soloq.losses}
                <span style={{ color: "#F94848" }}>L</span>
              </div>
              <div className="wr" style={{ color: "black" }}>
                {soloq.winrate}% WR
              </div>
            </div>
                <div className="row3">{soloq.lp} LP</div>
          </div>
        </div>

        <br />
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
}

export default EloInfo;
