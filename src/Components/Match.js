import React from "react";
import "../css/Match.css";
import Jhin from "../img/champions/Jhin.png";
import Aatrox from "../img/champions/Aatrox.png";
import adc from "../img/positions/adc-icon.png";

function Match() {
  return (
    <React.Fragment>
        <div className="match">
          <div className="champ-container">
            <div className="line-container">
              <div className="line-s"></div>
            </div>
            <div className="champ-icon">
              <img src={Jhin} alt="" className="champ_img" />
            </div>
            <div className="result">Victoria</div>
          </div>
          <div className="kda-container">
            <div className="kda1">3.0 KDA</div>
            <div className="kda2">11/4/5</div>
          </div>
          <div className="cs-container">
            <div className="cs">248 CS</div>
            <div className="cs-minute">14 CS/min.</div>
          </div>
          <div className="dmg-container">
            <div className="dmg">11,900 dmg.</div>
            <div className="dmg-team">22% del daño.</div>
          </div>
          <div className="game-container">
            <div className="game-duration">23:56 min</div>
            <div className="game-type">ARAM</div>
          </div>

          <div className="position-game">
            <img src={adc} alt="" className="l-position" />
          </div>
        </div>

    </React.Fragment>
  );
}

export default Match;
