import React from "react";
import "../css/Match.css";
import Jhin from "../img/champions/Jhin.png";
import adc from "../img/positions/adc-icon.png";
import peepoDance from "../img/emojis/peepoDance.gif";
import peepoClap from "../img/emojis/peepoClap.gif";
import ezyClap from "../img/emojis/ezyClap.gif";
import peepoSad from "../img/emojis/peepoSad.gif";
import sadge from "../img/emojis/sadge.gif";
import sadgeRain from "../img/emojis/sadgeRain.gif";

import {
  MatchContainer,
  Line,
  ChampContainer,
  ChampionImg,
  ImageWrapper,
  MatchDetails,
  DetailsData,
  RankedType,
  Emoji,
} from "../Components/styles/Match.style";

const Match = ({ data }) => {
  const GetEmoji = ({ value }) => {
    console.log(value);
    const i = Math.floor(Math.random() * 3) + 1;

    if (value) {
      switch (i) {
        case 1:
          return (
            <Emoji
              src={peepoDance}
              emoji="peepoDance"
              alt=""
              width="30"
              className="emoji"
            />
          );
        case 2:
          return (
            <Emoji
              src={peepoClap}
              emoji="peepoClap"
              alt=""
              width="30"
              className="emoji"
            />
          );
        case 3:
          return (
            <Emoji
              src={ezyClap}
              emoji="ezyClap"
              alt=""
              width="30"
              className="emoji"
            />
          );
      }
    } else {
      switch (i) {
        case 1:
          return (
            <Emoji
              src={peepoSad}
              emoji="peepoSad"
              alt=""
              width="30"
              className="emoji"
            />
          );
        case 2:
          return (
            <Emoji
              src={sadge}
              emoji="sadge"
              alt=""
              width="30"
              className="emoji"
            />
          );
        case 3:
          return (
            <Emoji
              src={sadgeRain}
              emoji="sadgeRain"
              alt=""
              width="30"
              className="emoji"
            />
          );
      }
    }
  };

  return (
    <React.Fragment>
      <MatchContainer
        onMouseEnter={() => {
          console.log("BUENAS TARDES");
        }}
      >
        <MatchDetails>
          <Line status={false}></Line>
          <DetailsData>
            <RankedType className="m-0">Ranked Solo</RankedType>
            <p className="mb-4">Hace 5 horas</p>
            <p className="m-0">33.23 min</p>
            <GetEmoji value={false} />
          </DetailsData>
        </MatchDetails>
        <ChampContainer>
          <ImageWrapper>
            <ChampionImg src={Jhin}></ChampionImg>
          </ImageWrapper>
        </ChampContainer>
      </MatchContainer>
    </React.Fragment>
  );
};

export default Match;
