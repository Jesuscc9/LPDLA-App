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

  let server = "la1";

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

    const name = (id) => {
      const keys = Object.keys(championNames);
      for (let i = 0; i < keys.length; i++) {
        if (id == parseInt(championNames[keys[i]].key)) {
          return championNames[keys[i]].id;
        }
      }
    };

    mostMasteryChamps.forEach((el) => {
      el.masteryImg =
        el.championLevel >= 5
          ? `https://raw.communitydragon.org/pbe/game/assets/ux/mastery/mastery_icon_${el.championLevel}.png`
          : "https://raw.communitydragon.org/pbe/game/assets/ux/mastery/mastery_icon_default.png";
      el.championName = name(el.championId);
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

    const getSummonerName = async (summId) => {
      const summonerSpells = await (
        await fetch(
          `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/summoner.json`
        )
      ).json();

      return Object.keys(summonerSpells.data).find((e) => {
        return parseInt(summonerSpells.data[e].key) == parseInt(summId);
      });
    };

    const getRuneName = async (runeId, primary) => {
      const runesNames = await (
        await fetch(
          `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`
        )
      ).json();

      if (primary) {
        for (let i = 0; i < runesNames.length; i++) {
          const runes = runesNames[i].slots[0].runes;
          for (let j = 0; j < runes.length; j++) {
            if (runes[j].id == runeId) {
              return runes[j].icon;
            }
          }
        }
      }

      return runesNames.find((e) => {
        return e.id == runeId;
      });
    };

    const getGameType = async (queueId) => {
      if (queueId == 0) {
        return "Custom 😛";
      } else if (queueId == 400) {
        return "Normal 5v5 🍗";
      } else if (queueId == 420) {
        return "Ranked Solo 😳";
      } else if (queueId == 440) {
        return "Ranked Flex 🥵";
      } else if (queueId == 450) {
        return "ARAM 😎🤙";
      }

      const queues = await (
        await fetch(
          `http://static.developer.riotgames.com/docs/lol/queues.json`
        )
      ).json();

      let type = queues.find((e) => {
        return e.queueId == queueId;
      }).description;

      type = type.replace("games", "");

      return type;
    };

    let matches = (
      await (
        await fetch(
          `https://${server}.api.riotgames.com/lol/match/v4/matchlists/by-account/${summonerData.accountId}$?api_key=${API_KEY}`
        )
      ).json()
    ).matches;

    if (matches.length >= 10) matches = matches.slice(0, 10);

    for (let i = 0; i < matches.length; i++) {
      matches[i].gameDetails = await (
        await fetch(
          `https://${server}.api.riotgames.com/lol/match/v4/matches/${matches[i].gameId}?api_key=${API_KEY}`
        )
      ).json();

      matches[i].summonerId = summonerData.id;
      matches[i].championName = name(matches[i].champion);

      const participantId = matches[i].gameDetails.participantIdentities.find(
        (e) => {
          return e.player.summonerId == matches[i].summonerId;
        }
      );

      const gameData = matches[i].gameDetails.participants.find((e) => {
        return e.participantId == participantId.participantId;
      });

      matches[i].championName = matches[i].championName;
      matches[i].stats = gameData;
      matches[
        i
      ].primaryRune = `http://ddragon.leagueoflegends.com/cdn/img/${await getRuneName(
        matches[i].stats.stats.perk0,
        true
      )}`;

      matches[i].gameType = await getGameType(matches[i].gameDetails.queueId);

      matches[i].secondaryRune = `http://ddragon.leagueoflegends.com/cdn/img/${
        (await getRuneName(matches[i].stats.stats.perkSubStyle)).icon
      }`;
      matches[
        i
      ].spell1Name = `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${await getSummonerName(
        gameData.spell1Id
      )}.png`;
      matches[
        i
      ].spell2Name = `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${await getSummonerName(
        gameData.spell2Id
      )}.png`;
      matches[
        i
      ].championImg = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${matches[i].championName}.png`;
    }

    setMatchList(matches);

    setSummonerInfo((prevState) => ({
      ...prevState,
      ...summonerData,
      lastGame: matches[0].timestamp,
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
        onRegionChange={(region) => {
          console.log("SE cambia de region");
          server = region;
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
