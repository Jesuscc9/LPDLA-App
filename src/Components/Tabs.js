import React from "react";

const Tabs = (props) => {
  const handleClick = (value) => {
    props.onSummonerChange(value);
  };

  const summoners = [
    "wideßwipoHappy",
    "Lalo8115scout",
    "PedroPapas909",
    "Rekkłes Fanboy",
    "Mikyx Fanboy",
    "SpuriousCorn",
    "QUIQO",
  ];

  return (
    <div className="tabs-container d-flex">
      {summoners.map((summoner) => {
        return (
          <React.Fragment>
            {/* <div className="button-container">
              <button
                className="tab"
                key={summoner}
                onClick={() => handleClick(summoner)}
              >
                <p className="name-player">{summoner}</p>
              </button>
            </div>
            <div className="line"></div> */}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Tabs;
