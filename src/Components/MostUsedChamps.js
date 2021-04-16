import React from "react";
import Anivia from "../img/champions/Anivia.png";
import Mastery from "../img/masteries/7.png";

function MostUsedChamps(props) {
  const champs = props.data;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  return (
    <React.Fragment>
      <div className="most-used-champs">
        {Object.keys(champs).map((champ, i) => {
          const img = champs[i].masteryImg;
          return (
            <React.Fragment key={i}>
              <div className="item">
                <div className="most-used-champ">
                  <div className="champion-container-img">
                    <div className="used-champion-img">
                      <img
                        src={champs[i].img}
                        alt=""
                        className="used-champ-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="played-champion-container">
                  <div className="games-played">{numberWithCommas(champs[i].points)} pts.</div>
                  <div className="percent-played">54%</div>
                </div>
                <div className="champion-mastery">
                  <div className="mastery">
                    <img src={champs[i].masteryImg} alt="" className="mastery-img" />
                  </div>
                </div>
              </div>
              <div className="divisor"></div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default MostUsedChamps;
