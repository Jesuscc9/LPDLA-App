import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Stats.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Navbar from "../Components/Navbar";
import Tabs from "../Components/Tabs";
import EloInfo from "../Components/EloInfo";
import SummonerInfo from "../Components/SummonerInfo";
import MostUsedChamps from "../Components/MostUsedChamps";
import Matches from "../Components/Matches";

import Loader from "react-loader-spinner";
import { Animated } from "react-animated-css";

const Stats = () => {
  const API_KEY = "RGAPI-b184baf4-2de0-4277-9f4f-5db7b0a682bb";

  const [summonerSearch, setSummonerSearch] = useState("");
  const [server, setServer] = useState("la1");
  const [summoner, setSummoner] = useState("Rekkłes Fanboy");

  const [summonerInfo, setSummonerInfo] = useState({
    profileIconImg: "",
    summonerLevel: "",
    name: "",
  });

  const [loading, setLoading] = useState(true);

  let summInfo = {
    id: "",
    name: "",
    level: "",
    lastGame: "",
    favPos1: "",
    favPos2: "",
    profileIconImg: "",
    accountId: "",
  };

  const [eloInfo, setEloInfo] = useState({});
  let elo = {
    summoner: {
      name: "",
    },
    soloq: {
      wins: "",
      losses: "",
      points: "",
      lp: "",
      division: "",
      rank: "",
      winrate: 0,
    },
    flex: {
      wins: "",
      losses: "",
      points: "",
      lp: "",
      division: "",
      winrate: 0,
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
      masteryImg: "",
    },
    1: {
      name: "",
      id: "",
      points: "",
      mastery: "",
      games: "",
      img: "",
      masteryImg: "",
    },
    2: {
      name: "",
      id: "",
      points: "",
      mastery: "",
      games: "",
      img: "",
      masteryImg: "",
    },
    3: {
      name: "",
      id: "",
      points: "",
      mastery: "",
      games: "",
      img: "",
      masteryImg: "",
    },
    4: {
      name: "",
      id: "",
      points: "",
      mastery: "",
      games: "",
      img: "",
      masteryImg: "",
    },
  };

  const [matchesList, setMatchesList] = useState({});

  let matches = {
    matches: {},
    endpoint: "",
    api: "",
  };

  async function fetchData() {
    setLoading(true);

    //400ms are necessary to execute the animation correctly c:
    await new Promise((resolve) => setTimeout(resolve, 400));

    const summonerData = await (
      await fetch(
        `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${API_KEY}`
      )
    ).json();

    summonerData.profileIconImg = `http://ddragon.leagueoflegends.com/cdn/10.13.1/img/profileicon/${summonerData.profileIconId}.png`;

    setSummonerInfo((prevState) => ({
      ...prevState,
      ...summonerData,
    }));

    const mostUsedChamps = await (
      await fetch(
        `https://${server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerData.id}$?api_key=${API_KEY}`
      )
    ).json();

    console.log(mostUsedChamps);

    setLoading(false);

    //   async function getMostUsedChamps() {
    //     res = await fetch(`https://server.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summInfo.id}$?api_key=${API_KEY}`);
    //     res.json().then((res) => {
    //       for (let i = 0; i < 5; i++) {
    //         usedChamps[i].id = res[i].championId;
    //         usedChamps[i].mastery = res[i].championLevel;
    //         usedChamps[i].points = res[i].championPoints;
    //         usedChamps[
    //           i
    //         ].masteryImg = `https://raw.communitydragon.org/pbe/game/assets/ux/mastery/mastery_icon_${res[i].championLevel}.png`;

    //         if (parseInt(res[i].championLevel) < 5) {
    //           usedChamps[i].masteryImg =
    //             "https://raw.communitydragon.org/pbe/game/assets/ux/mastery/mastery_icon_default.png";
    //         }
    //       }
    //       async function championNames() {
    //         res = await fetch(
    //           "http://ddragon.leagueoflegends.com/cdn/10.13.1/data/en_US/champion.json"
    //         );
    //         res.json().then((res) => {
    //           let keys = [];
    //           for (let i in res.data) {
    //             keys.push(res.data[i]);
    //           }

    //           for (let i = 0; i < 5; i++) {
    //             for (let j = 0; j < keys.length; j++) {
    //               if (usedChamps[i].id == keys[j].key) {
    //                 usedChamps[i].name = keys[j].id;
    //                 usedChamps[i].img =
    //                   "http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/" +
    //                   keys[j].id +
    //                   ".png";
    //               }
    //             }
    //           }

    //           setMostUsedChamps(usedChamps);
    //         });
    //       }

    //       championNames();
    //     });
    //   }

    //   getMostUsedChamps();

    //   async function getEloInfo() {
    //     res = await fetch(
    //       "https://" +
    //         server +
    //         ".api.riotgames.com/lol/league/v4/entries/by-summoner/" +
    //         summInfo.id +
    //         API_KEY
    //     );
    //     res.json().then((res) => {
    //       console.log(res);
    //       elo.soloq.wins = res[0].wins;
    //       elo.soloq.losses = res[0].losses;
    //       elo.soloq.lp = res[0].leaguePoints;
    //       elo.soloq.rank = res[0].rank;
    //       elo.soloq.division = res[0].tier;
    //       elo.summoner.name = summInfo.name;
    //       elo.soloq.winrate = Math.round(
    //         (parseInt(res[0].wins) /
    //           (parseInt(res[0].wins) + parseInt(res[0].losses))) *
    //           100
    //       );

    //       console.log(elo);

    //       setEloInfo(elo);
    //     });
    //   }
    //   getEloInfo();

    //   async function getMatches() {
    //     res = await fetch(
    //       "https://" +
    //         server +
    //         ".api.riotgames.com/lol/match/v4/matchlists/by-account/" +
    //         summInfo.accountId +
    //         API_KEY
    //     );
    //     res.json().then((res) => {
    //       matches.matches = res.matches;
    //       matches.api = API_KEY;
    //       matches.endpoint = 'https://' + server + '.api.riotgames.com/lol/match/v4/matches/';
    //       setMatchesList(matches);
    //     });
    //   }

    //getMatches();
  }

  useEffect(() => {
    fetchData();
  }, [summoner, server]);

  return (
    <React.Fragment>
      <Navbar
        onSubmit={(name) => {
          setSummoner(name);
        }}
      />
      <br />
      <Tabs
        onSummonerChange={(name) => {
          setSummoner(name);
        }}
      />
      <br />

      {loading ? (
        <div className="container d-flex justify-content-center">
          <div className="position-absolute mt-5 p-0">
            <Loader
              type="Puff"
              color="#2c99ff"
              height={50}
              width={50}
              timeout={1500}
              className="position-absolute"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={200}
        animationOutDuration={200}
        isVisible={!loading}
      >
        <div className="container">
          <div className="main-container">
            <div className="column1">
              <EloInfo data={eloInfo} />
              <MostUsedChamps data={mostUsedChamps} />
            </div>
            <div className="column2">
              <SummonerInfo data={summonerInfo} />
              <br />
              <Matches data={matchesList} />
            </div>
          </div>
        </div>
      </Animated>

      <br />
    </React.Fragment>
  );
};

export default Stats;
