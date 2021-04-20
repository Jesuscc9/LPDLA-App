import React, { useState } from "react";
import "../css/EloInfo.css";
import elo from "../img/emblems/Emblem_Challenger.png";
import Matches from "../Components/Matches";
import Jhin from "../img/champions/Jhin.png";
import Aatrox from "../img/champions/Aatrox.png";

function EloInfo ({data}){


  const emblems = {
    bronze: require('../img/emblems/Emblem_Bronze.png'),
    silver: require('../img/emblems/Emblem_Silver.png'),
    gold: require('../img/emblems/Emblem_Gold.png'),
    platinum: require('../img/emblems/Emblem_Platinum.png'),
    diamond: require('../img/emblems/Emblem_Diamond.png'),
    master: require('../img/emblems/Emblem_Master.png'),
    grandmaster: require('../img/emblems/Emblem_Grandmaster.png'),
    challenger: require('../img/emblems/Emblem_Challenger.png'),
  }

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  // console.log(props.data[0])
  // console.log(eloInfo)

  if(data)console.log(data)

  if (data) {
    console.log((data.tier).toLowerCase())
    return (
      <React.Fragment>
        <div className="soloq">
          <div className="col1">
            <div className="row1 elo-container">
              <img
                src={emblems[((data.tier).toLowerCase())]}
                alt=""
                className="elo-img"
              />
            </div>
            <div className="row2 text-center">
              {/* ORO 4 */}
              {data.tier + " " + data.rank}
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
                {data.wins}
                {/* 20 */}
                <span style={{ color: "#37B03F" }}>W</span>
              </div>
              <div className="loses">
                {data.losses}
                {/* 30 */}
                <span style={{ color: "#F94848" }}>L</span>
              </div>
              <div className="wr" style={{ color: "black" }}>
                {Math.round(parseInt(data.wins) / (parseInt(data.wins) + parseInt(data.losses)) * 100)}% WR
                {/* 56% */}
              </div>
            </div>
            <div className="row3">
              {data.leaguePoints} LP
              {/* 25 LP */}
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
