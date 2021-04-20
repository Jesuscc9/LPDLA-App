import React, { useState } from "react";

const MostUsedChamps = (props) =>{
  const champs = props.data;

  const numberWithCommas = (x) =>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const Map = (x, in_min, in_max, out_min, out_max) => {
    return ((x-in_min) * (out_max-out_min) / (in_max-in_min) + out_min)
  }

  const now = Date.now()

  console.log('Este es el más viejo: ' + props.olderChamp)
  console.log('Este es el más nuevo: ' + props.newerChamp)

  return (
    <React.Fragment>
      {champs.length && props.olderChamp < now ? (
        <div className="most-used-champs">
          <p className="mb-0 font-weight-bold">Campeones Principales</p>
          <div className="divisor"></div>
          {champs.map((champ) => {
            // const timeDiff = ((((champ.lastPlayTime - props.olderChamp) / ((props.newerChamp - props.olderChamp) - (champ.lastPlayTime - props.olderChamp))) * 100))
            // console.log(champ.lastPlayTime - props.olderChamp, ' es ', (props.newerChamp - props.olderChamp) - (champ.lastPlayTime - props.olderChamp))
            const timeDiff = Map(champ.lastPlayTime, props.olderChamp, props.newerChamp, 0, 100)
            console.log(champ.championName, ' ES ', timeDiff)
            return (
              <React.Fragment key={champ}>
                <div className="item">
                  <div className="most-used-champ">
                    <div className="champion-container-img" style={timeDiff > 80 ? { border: '2px solid #0083FF'} : timeDiff > 60 ? { border: '2px solid orange' } : { border: '2px solid red'}}>
                      <div className="used-champion-img">
                        <img
                          src={champ.championImg}
                          alt=""
                          className="used-champ-img"
                          style={{ filter: `grayscale(${100 - timeDiff}%)` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="played-champion-container">
                    <div className="games-played">
                      {numberWithCommas(champ.championPoints)} pts.
                    </div>
                    <div className="percent-played">54%</div>
                  </div>
                  <div className="champion-mastery">
                    <div className="mastery">
                      <img
                        src={champ.masteryImg}
                        alt=""
                        className="mastery-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="divisor"></div>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
}

export default MostUsedChamps;
