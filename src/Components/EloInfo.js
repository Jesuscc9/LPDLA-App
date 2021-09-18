import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { romanConverter } from "../utils";
import { EloContainer } from "./styles/EloInfo.stye";

const EloInfo = () => {
  const data = useSelector((state) => state.data.elo);
  console.log(data);

  const [elo, setElo] = useState(data[0]);
  const [queue, setQueue] = useState(1);

  const winrate = (a, b) => Math.trunc((a / (a + b)) * 100);

  const winrateColor = (wr) => {
    if(wr < 40){
      return "#FF5050"
    }else if(wr < 50){
      return "#FFAA50";
    }else if(wr < 60){
      return "#009959"
    }
    return "#50FF70"
  }

  return (
    <>
      <EloContainer>
        <div className="elo-header">
          <p>Ranked</p>
          <select
            className="form-control queue"
            onChange={(e) => {
              setElo(data[queue]);
              setQueue(queue ? 0 : 1);
            }}
          >
            <option value="soloq">SoloQ</option>
            <option value="flex">Flex</option>
          </select>
        </div>
        {elo ? (
          <>
            <div className="elo-data">
              <img
                src={`https://opgg-static.akamaized.net/images/medals/${elo.tier.toLowerCase()}_${romanConverter(
                  elo.rank
                )}.png`}
                className="elo-img"
              />
              <div className="elo-stats">
                <span className="rank tier">{elo.tier.toLowerCase()} </span>
                <span className="rank"> {elo.rank}</span>
                <div className="league-points-container">
                  <span className="league-points">{elo.leaguePoints} LP </span>
                  <span className="winrate" style={{color: winrateColor(winrate(elo.wins, elo.losses))}}>
                    {winrate(elo.wins, elo.losses)}%
                  </span>
                </div>
                <div className="games">
                  <span className="wins">{elo.wins}W / </span>
                  <span className="loses">{elo.losses}L</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="elo-error">
            <h2>No data for this ranked mode :(</h2>
          </div>
        )}
      </EloContainer>
    </>
  );
};

export default EloInfo;
