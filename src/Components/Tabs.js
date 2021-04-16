import React from "react";

const Tabs = (props) => {
  const handleClick = (value) => {
    props.onSummonerChange(value);
  };

  const summoners = [
    "Rekkłes Fanboy",
    "wideßwipoHappy",
    "Lalo8115scout",
    "Mikyx Fanboy",
    "PedroPapas909",
  ];

  return (
    <div className="container">
      <div className="row">
        {summoners.map((summoner) => {
          return (
            <React.Fragment>
              <div className="button-container">
                <button
                  className="tab"
                  key={summoner}
                  onClick={() => handleClick(summoner)}
                >
                  <p className="name-player">{summoner}</p>
                </button>
              </div>
              <div className="line"></div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
