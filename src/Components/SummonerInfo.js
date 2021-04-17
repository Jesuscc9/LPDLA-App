import React from "react";
import "../css/SummonerInfo.css";
import profileIcon from "../img/logo.jpg";
import adc from "../img/positions/adc-icon.png";
import jg from "../img/positions/jungla-icon.jpeg";

function SummonerInfo(props) {
  console.log(props);
  const data = props.data;

  return (
    <React.Fragment>
      <div className="matches-summ-info">
        <div className="summoner-info">
          <div className="col4">
            <div className="profile-icon-container">
              <div className="profile-icon">
                <img src={data.profileIconImg} alt="" className="profile-img" />
              </div>
            </div>
            <div className="lvl-container">{data.summonerLevel}</div>
          </div>
          <div className="col5">
            <div className="row4">{data.name}</div>
            <div className="row5">Última partida: hace 5 horas</div>
          </div>
          <div className="col6">
            <div className="favorites-position">
              <div className="row6 text-center">Posiciones favoritas:</div>
              <div className="row7">
                <div className="position-container">
                  <img src={adc} alt="" className="position" />
                  <div className="position-data">
                    Bot
                    <br />
                    83%
                  </div>
                </div>
                <div className="position-container">
                  <img src={jg} alt="" className="position" />
                  <div className="position-data">
                    Jungla
                    <br />
                    17%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SummonerInfo;
