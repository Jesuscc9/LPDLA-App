import React from "react";
import "../css/SummonerInfo.css";
import profileIcon from "../img/logo.jpg";
import adc from "../img/positions/adc-icon.png";
import jg from "../img/positions/jungla-icon.jpeg";

const SummonerInfo = ({data}) =>{

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
            <div className="row5">Última partida: {timeDifference(Date.now(), data.lastGame)}</div>
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

function timeDifference(current, previous) {

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
       return 'Hace ' + Math.round(elapsed/1000) + ' segundos ';   
  }

  else if (elapsed < msPerHour) {
       return 'Hace ' + Math.round(elapsed/msPerMinute) + ' minutos';   
  }

  else if (elapsed < msPerDay ) {
       return 'Hace ' + Math.round(elapsed/msPerHour ) + ' horas';   
  }

  else if (elapsed < msPerMonth) {
      return 'Hace ' + Math.round(elapsed/msPerDay) + ' días';   
  }

  else if (elapsed < msPerYear) {
      return 'Hace ' + Math.round(elapsed/msPerMonth) + ' meses';   
  }

  else {
      return 'Hace ' + Math.round(elapsed/msPerYear ) + ' años';   
  }
}

export default SummonerInfo;
