import React, { useEffect } from "react";
import profileIcon from "../img/logo.jpg";
import adc from "../img/positions/adc-icon.png";
import jg from "../img/positions/jungla-icon.jpeg";
import { TimeDiff } from "./Time";
import { useSelector } from "react-redux";
import { SummonerInfoContainer } from "./styles/SummonerInfo.style";

const SummonerInfo = () => {
  const summonerData = useSelector((state) => {
    return state.data.summonerData;
  });

  const matches = useSelector((state) => {
    return state.data.matches;
  });

  return (
    <SummonerInfoContainer
      backgroundUrl={
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
      }
    >
      <div className="profile-img-container">
        <img src={summonerData.profileImg} alt="" />
        <div className="level-container">
          <div className="level">
            <p>198</p>
          </div>
        </div>
      </div>
      <div className="name-container">
        <h1>PedroPapas909</h1>
        <p>Last game: 1 hour ago</p>
      </div>
      <div className="roles-container">
        <p>Roles</p>
        <div className="roles-images">
          <img
            src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-bottom-blue.png"
            alt=""
          />
          <img
            src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-jungle-blue.png"
            alt=""
          />
        </div>
      </div>
      {/* </div> */}
    </SummonerInfoContainer>
  );
};

export default SummonerInfo;
