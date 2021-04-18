import React from "react";

function MostUsedChamps(props) {
  const champs = props.data;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const now = Date.now()

  return (
    <React.Fragment>
      {champs.length && props.olderChamp < now ? (
        <div className="most-used-champs">
          {champs.map((champ) => {
            const timeDiff = 90 - ((((champ.lastPlayTime - props.olderChamp) / (now - props.olderChamp)) * 100))
            console.log(timeDiff)
            return (
              <React.Fragment key={champ}>
                <div className="item">
                  <div className="most-used-champ">
                    <div className="champion-container-img" style={timeDiff < 20 ? { border: '2px solid #0083FF'} : timeDiff < 35 ? { border: '2px solid orange' } : { border: '2px solid red'}}>
                      <div className="used-champion-img">
                        <img
                          src={champ.championImg}
                          alt=""
                          className="used-champ-img"
                          style={{ filter: `grayscale(${timeDiff}%)` }}
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
