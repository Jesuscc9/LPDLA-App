import React, { useEffect } from "react";
import profileIcon from "../img/logo.jpg";
import adc from "../img/positions/adc-icon.png";
import jg from "../img/positions/jungla-icon.jpeg";
import { TimeDiff } from "./Time";
import { useSelector } from "react-redux";
import { SummonerInfoContainer } from "./styles/SummonerInfo.style";
import { api } from "../data/lolApi";

import { usePalette } from "react-palette";

const SummonerInfo = () => {
  const summonerData = useSelector((state) => {
    return state.data.summonerData;
  });

  const matches = useSelector((state) => {
    return state.data.matches;
  });

  const championImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${api.getChampionName(
    matches[0]?.champion
  )}_0.jpg`;

  const { data, loading, error } = usePalette(summonerData.profileImg);

  let popularRoles = [];

  const getMainRoles = () => {
    const lanes = {
      top: 0,
      jungle: 0,
      mid: 0,
      adc: 0,
      support: 0,
    };

    if (matches.length > 0) {
      matches.forEach((element) => {
        if (
          element.lane == "TOP" ||
          element.lane == "MID" ||
          element.lane == "JUNGLE"
        ) {
          lanes[element.lane.toLowerCase()]++;
        } else if (element.lane == "BOTTOM") {
          if (element.role.includes("SUPPORT")) {
            lanes.support++;
          } else {
            lanes.adc++;
          }
        }
      });
    }

    const sorted = Object.entries(lanes).sort((a, b) => b[1] - a[1]);

    popularRoles = [sorted[0], sorted[1]];
  };

  getMainRoles();

  return (
    <SummonerInfoContainer
      backgroundUrl={championImg}
      borderImg={data.darkMuted}
    >
      <div className="profile-img-container">
        <img src={summonerData.profileImg} alt="" />
        <div className="level-container">
          <div className="level">
            <p>{summonerData.summonerLevel}</p>
          </div>
        </div>
      </div>
      <div className="name-container">
        <h1>{summonerData.name}</h1>
        <p>
          Last game: {matches[0]?.timestamp && TimeDiff(matches[0]?.timestamp)}
        </p>
      </div>
      <div className="roles-container">
        <p>Roles</p>
        <div className="roles-images">
          <img src={api.getRoleImg(popularRoles[0][0])} alt="" />
          <img src={api.getRoleImg(popularRoles[1][0])} alt="" />
        </div>
      </div>
      {/* </div> */}
    </SummonerInfoContainer>
  );
};

export default SummonerInfo;
