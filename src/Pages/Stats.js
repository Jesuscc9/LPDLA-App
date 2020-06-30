import React, { useState, useEffect } from "react";
import "../css/Stats.css";
import EloInfo from "../Components/EloInfo";
import SummonerInfo from "../Components/SummonerInfo";
import MostUsedChamps from "../Components/MostUsedChamps";
import Matches from "../Components/Matches";

const Stats = () => {
  const [server, setServer] = useState("la1");
  const [summoner, setSummoner] = useState("aventador9");
  const [summonerInfo, setSummonerInfo] = useState({});
  let summInfo = {
    id: "",
    name: "",
    level: "",
    lastGame: "",
    favPos1: "",
    favPos2: "",
    profileIconImg: "",
  };

  const [eloInfo, setEloInfo] = useState({});
  let elo = {
    soloq: {
      wins: "",
      loses: "",
      points: "",
      lp: "",
      division: "",
    },
    flex: {
      wins: "",
      loses: "",
      points: "",
      lp: "",
      division: "",
    },
  };

  const [mostUsedChamps, setMostUsedChamps] = useState({});
  let usedChamps = {
    0: {
      name: "",
      id: "",
      points: "",
      mastery: "",
      games: "",
      img: "",
      masteryImg: '',
    },
    1: {
      name: "",
      id: "",
      points: "",
      mastery: "",
      games: "",
      img: "",
      masteryImg: '',
    },
    2: {
      name: "",
      id: "",
      points: "",
      mastery: "",
      games: "",
      img: "",
      masteryImg: '',
    },
    3: {
      name: "",
      id: "",
      points: "",
      mastery: "",
      games: "",
      img: "",
      masteryImg: '',
    },
    4: {
      name: "",
      id: "",
      points: "",
      mastery: "",
      games: "",
      img: "",
      masteryImg: '',
    },
  };

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

  async function fetchData() {
    let res = await fetch(
      "https://" +
        server +
        ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
        summoner +
        "?api_key=RGAPI-b184baf4-2de0-4277-9f4f-5db7b0a682bb"
    );
    res.json().then((res) => {
      summInfo.level = res.summonerLevel;
      summInfo.name = res.name;
      summInfo.id = res.id;
      summInfo.profileIconImg =
        "http://ddragon.leagueoflegends.com/cdn/10.13.1/img/profileicon/" +
        res.profileIconId +
        ".png";
      setSummonerInfo(summInfo);

      async function getMostUsedChamps() {
        res = await fetch(
          "https://" +
            server +
            ".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
            summInfo.id +
            "?api_key=RGAPI-b184baf4-2de0-4277-9f4f-5db7b0a682bb"
        );
        res.json().then((res) => {
          for (let i = 0; i < 5; i++) {
            usedChamps[i].id = res[i].championId;
            usedChamps[i].mastery = res[i].championLevel;
            usedChamps[i].points = res[i].championPoints;
            usedChamps[i].masteryImg = '../img/masteries/'+ res[i].championLevel +'.png'
          }
          async function championNames() {
            res = await fetch(
              "http://ddragon.leagueoflegends.com/cdn/10.13.1/data/en_US/champion.json"
            );
            res.json().then((res) => {

              let keys = [];
              for (let i in res.data) {
                keys.push(res.data[i]);
              }

              for(let i = 0;i<5;i++){
                for(let j = 0;j<keys.length;j++){
                  if(usedChamps[i].id == keys[j].key){
                    usedChamps[i].name = keys[j].id;
                    usedChamps[i].img = 'http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/' + keys[j].id + '.png';
                  }
                }
              }

              setMostUsedChamps(usedChamps);
            });
          }

          championNames();

        });
      }

      getMostUsedChamps();

      async function getEloInfo(){
        res = await fetch(
          'https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/WKX_OfZPl0cJW3lJyarcjgCcJ-PHrx_he_t6d8htbg6jwQ?api_key=RGAPI-b184baf4-2de0-4277-9f4f-5db7b0a682bb'
        );
        res.json().then((res => {

        }));
      }

      getEloInfo();
    });
  }

  useEffect(() => {
    fetchData();
  }, [summoner, server]);

  return (
    <React.Fragment>
      <br />
      <div className="container">
        <div className="row">
          <div className="button-container">
            <button
              className="tab aventador9"
              onClick={handleClick}
              id="aventador9"
            >
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

      <div className="container">
        <div className="row justify-content-around">
          <div className="column1">
            <EloInfo />
            <MostUsedChamps data={mostUsedChamps}/>
          </div>
          <div className="column2">
            <SummonerInfo data={summonerInfo} />
            <br />
            <Matches />
          </div>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};

export default Stats;
