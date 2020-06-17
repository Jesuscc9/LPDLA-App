import React, { useState, useEffect } from "react";
import "../css/Stats.css";
import EloInfo from '../Components/EloInfo'

function Stats() {
  const [server, setServer] = useState("NA");
  const [summoner, setSummoner] = useState("Aventador9");

  const handleClick = (e) => {
    const tab = e.target;
    let tabs = document.getElementsByClassName("tab");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.backgroundColor = "rgb(255, 255, 255)";
      tabs[i].style.color = "black";
    }

    document.getElementById(tab.textContent).style.backgroundColor = "#0083FF";
    document.getElementById(tab.textContent).style.color = "white";

    setSummoner(tab.textContent);
  };

  useEffect(() => {
    console.log(summoner);
  });

  return (
    <React.Fragment>
      <br />
      <div className="container">
        <div className="row">
          <div className="button-container">
            <button className="tab aventador9" onClick={handleClick} id="aventador9">
              <p className="name-player">aventador9</p>
            </button>
          </div>
          <div className="line"></div>

          <div className="button-container">
            <button className="tab" onClick={handleClick} id="xXDiegonchoXx">
              <p className="name-player">xXDiegonchoXx</p>
            </button>
          </div>
          <div className="line"></div>

          <div className="button-container">
            <button className="tab" onClick={handleClick} id="Lalo8115scout">
              <p className="name-player">Lalo8115scout</p>
            </button>
          </div>
          <div className="line"></div>

          <div className="button-container">
            <button className="tab" onClick={handleClick} id="HumbLong">
              <p className="name-player">HumbLong</p>
            </button>
          </div>
          <div className="line"></div>

          <div className="button-container">
            <button className="tab" onClick={handleClick} id="PedroPapas909">
              <p className="name-player">PedroPapas909</p>
            </button>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <br />
      <EloInfo/>
      <br/><br/><br/><br/><br/><br/><br/>
    </React.Fragment>
  );
}

export default Stats;
