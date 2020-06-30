import React from "react";
import "../css/EloInfo.css";
import elo from "../img/emblems/Emblem_Challenger.png";
import Matches from "../Components/Matches";
import Jhin from "../img/champions/Jhin.png";
import Aatrox from "../img/champions/Aatrox.png";

function EloInfo() {
  return (
    <React.Fragment>
      <div className="soloq">
        <div className="col1">
          <div className="row0">Aventador9</div>
          <div className="row1 elo-container">
            <img src={elo} alt="" className="elo-img" />
          </div>
          <div className="row2 text-center">BRONZE 4</div>
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
              124<span style={{ color: "#37B03F" }}>W</span>
            </div>
            <div className="loses">
              143<span style={{ color: "#F94848" }}>L</span>
            </div>
            <div className="wr" style={{ color: "black" }}>
              46.4% WR
            </div>
          </div>
          <div className="row3">28 Lp</div>
        </div>
      </div>

      <br />
    </React.Fragment>
  );
}

export default EloInfo;
