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
  const [olderChamp, setOlderChamp] = useState(Date.now());
  const [newerChamp, setNewerChamp] = useState(Date.now());

  const [summonerInfo, setSummonerInfo] = useState({
    profileIconImg: "",
    summonerLevel: "",
    name: "",
  });

  const [loading, setLoading] = useState(true);

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

    let mostMasteryChamps = await (
      await fetch(
        `https://${server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerData.id}$?api_key=${API_KEY}`
      )
    ).json();

    const recentChamps = [...mostMasteryChamps].sort((a, b) => {
      return b.lastPlayTime - a.lastPlayTime;
    });

    mostMasteryChamps = mostMasteryChamps.slice(0, 15);

    const championNames = (
      await (
        await fetch(
          "http://ddragon.leagueoflegends.com/cdn/10.13.1/data/en_US/champion.json"
        )
      ).json()
    ).data;

    const name = (el) => {
      const keys = Object.keys(championNames);
      for (let i = 0; i < keys.length; i++) {
        if (el.championId == parseInt(championNames[keys[i]].key)) {
          return championNames[keys[i]].id;
        }
      }
    };

    mostMasteryChamps.forEach((el) => {
      el.masteryImg =
        el.championLevel >= 5
          ? `https://raw.communitydragon.org/pbe/game/assets/ux/mastery/mastery_icon_${el.championLevel}.png`
          : "https://raw.communitydragon.org/pbe/game/assets/ux/mastery/mastery_icon_default.png";
      el.championName = name(el);
      el.championImg = `http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/${el.championName}.png`;
    });

    setOlderChamp(recentChamps[50].lastPlayTime);
    setNewerChamp(recentChamps[0].lastPlayTime);
    setMostUsedChamps(mostMasteryChamps);

    console.log("SE TERMINA DE CARGAR");
    setLoading(false);

    //const mostUsedChamps = await fetch(`https://${server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerData.id}$?api_key=${API_KEY}`).json();

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
      <div className="container d-flex justify-content-center">
        <Tabs
          onSummonerChange={(name) => {
            setSummoner(name);
          }}
        />
      </div>
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
        <div className="main-container">
          <EloInfo data={eloInfo} />
          <SummonerInfo data={summonerInfo} />
          <MostUsedChamps
            data={mostUsedChamps}
            olderChamp={olderChamp}
            newerChamp={newerChamp}
          />
          <Matches data={matchesList} />
          {/* <div className="column1">
            <EloInfo data={eloInfo} />
            <MostUsedChamps
              data={mostUsedChamps}
              olderChamp={olderChamp}
              newerChamp={newerChamp}
            />
          </div>
          <div className="column2">
            <SummonerInfo data={summonerInfo} />
            <br />
            <Matches data={matchesList} />
          </div> */}
        </div>
      </Animated>

      <br />
    </React.Fragment>
  );
};

export default Stats;
