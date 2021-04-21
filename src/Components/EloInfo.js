import React, { useState } from "react";
import "../css/EloInfo.css";

function EloInfo ({data, onQueueChange}){


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

  const option = React.useRef(null)

  const resetOption = () => {
    option.current.innerHTML = `
      <option value="soloq">SoloQ</option>
      <option value="flex">Flex</option>
    `
  }

  if (data) {
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
              {data.tier + " " + data.rank}
            </div>
          </div>
          <div className="col2">
            <div className="row3-1">
              <select name="" id="" className="form-control queue" onChange={(e) => {
                onQueueChange(e.target.value)
              }} ref={option}>
                <option value="soloq">SoloQ</option>
                <option value="flex">Flex</option>
              </select>
            </div>
            <div className="row3 data-wr">
              <div className="wins">
                {data.wins}
                <span style={{ color: "#37B03F" }}>W</span>
              </div>
              <div className="loses">
                {data.losses}
                <span style={{ color: "#F94848" }}>L</span>
              </div>
              <div className="wr" style={{ color: "black" }}>
                {Math.round(parseInt(data.wins) / (parseInt(data.wins) + parseInt(data.losses)) * 100)}% WR
              </div>
            </div>
            <div className="row3">
              {data.leaguePoints} LP
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
