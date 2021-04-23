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
import { MainContainer, Column1, Column2, Column3 } from "./styles/Stats.style";

const Stats = () => {
  const API_KEY = "RGAPI-b184baf4-2de0-4277-9f4f-5db7b0a682bb";

  const [matchList, setMatchList] = useState([]);
  const [server, setServer] = useState("la1");
  const [summoner, setSummoner] = useState("Rekkłes Fanboy");
  const [rankType, setRankType] = useState("soloq");

  const [summonerInfo, setSummonerInfo] = useState({
    profileIconImg: "",
    summonerLevel: "",
    name: "",
  });

  const [loading, setLoading] = useState(true);

  const [eloInfo, setEloInfo] = useState([]);

  const [mostUsedChamps, setMostUsedChamps] = useState({});

  async function fetchData() {
    setLoading(true);

    //400ms are necessary to execute the animation correctly c:
    await new Promise((resolve) => setTimeout(resolve, 400));

    const version = (
      await (
        await fetch("https://ddragon.leagueoflegends.com/api/versions.json")
      ).json()
    )[0];

    const summonerData = await (
      await fetch(
        `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${API_KEY}`
      )
    ).json();

    summonerData.profileIconImg = `http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${summonerData.profileIconId}.png`;

    let mostMasteryChamps = await (
      await fetch(
        `https://${server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerData.id}$?api_key=${API_KEY}`
      )
    ).json();

    if (mostMasteryChamps.length >= 19)
      mostMasteryChamps = mostMasteryChamps.slice(0, 20);

    const championNames = (
      await (
        await fetch(
          `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
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
      el.championImg = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${el.championName}.png`;
    });

    const elo = await (
      await fetch(
        `https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerData.id}$?api_key=${API_KEY}`
      )
    ).json();

    if (elo[0].queueType == "RANKED_SOLO_5x5") {
      setEloInfo(elo);
    } else {
      setEloInfo([{ ...elo[1] }, { ...elo[0] }]);
    }

    // let matches = (await (
    //   await fetch(
    //     `https://${server}.api.riotgames.com/lol/match/v4/matchlists/by-account/${summonerData.accountId}$?api_key=${API_KEY}`
    //   )
    // ).json()).matches;

    // if(matches.length >= 14) matches = matches.slice(0, 15)

    // matches.forEach(async (match) =>{
    //   match.gameDetails = await (
    //     await fetch(
    //       `https://${server}.api.riotgames.com/lol/match/v4/matches/${match.gameId}?api_key=${API_KEY}`
    //     )
    //   ).json();
    // })

    // setMatchList(matches)
    setMatchList([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    setSummonerInfo((prevState) => ({
      ...prevState,
      ...summonerData,
      //lastGame: matches[0].timestamp
      lastGame: Date.now(),
    }));
    setMostUsedChamps(mostMasteryChamps);

    setLoading(false);
  }

  const handleSummonerChange = (name) => {
    setSummoner(name);
  };

  useEffect(() => {
    fetchData();
  }, [summoner]);

  return (
    <React.Fragment>
      <Navbar
        onSubmit={(name) => {
          handleSummonerChange(name);
        }}
      />
      <br />
      <div className="container d-flex justify-content-center">
        <Tabs
          onSummonerChange={(name) => {
            handleSummonerChange(name);
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
        <MainContainer>
          <Column1>
            <EloInfo
              data={rankType == "soloq" ? eloInfo[0] : eloInfo[1]}
              onQueueChange={(e) => {
                setRankType(e);
              }}
            />
          </Column1>
          <Column2>
            <SummonerInfo data={summonerInfo} />
            <Matches matches={matchList} />
          </Column2>
          <Column3>
            <MostUsedChamps data={mostUsedChamps} />
          </Column3>
        </MainContainer>
      </Animated>

      <br />
    </React.Fragment>
  );
};

export default Stats;
