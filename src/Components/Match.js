import React, { useState } from "react";
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
  MatchResult,
} from "../Components/styles/Match.style";

const Match = ({ data }) => {
  const [emoji, setEmoji] = useState("none");

  const gameStatus = false;
  const GetEmoji = ({ value }) => {
    const i = Math.floor(Math.random() * 3) + 1;

    if (value) {
      switch (i) {
        case 1:
          setEmoji("peepoDance");
          return (
            <Emoji src={peepoDance} emoji="peepoDance" className="emoji" />
          );
        case 2:
          return <Emoji src={peepoClap} emoji="peepoClap" className="emoji" />;
        case 3:
          return <Emoji src={ezyClap} emoji="ezyClap" className="emoji" />;
      }
    } else {
      switch (i) {
        case 1:
          return <Emoji src={peepoSad} emoji="peepoSad" className="emoji" />;
        case 2:
          return <Emoji src={sadge} emoji="sadge" className="emoji" />;
        case 3:
          return <Emoji src={sadgeRain} emoji="sadgeRain" className="emoji" />;
      }
    }
  };

  return (
    <React.Fragment>
      <MatchContainer>
        <MatchDetails>
          <Line status={gameStatus}></Line>
          <DetailsData>
            <RankedType className="m-0">Ranked Solo</RankedType>
            <p style={{ marginBottom: 3 }}>Hace 5 horas</p>
            <MatchResult
              status={gameStatus}
              emoji={emoji}
              className="match-status"
            >
              {gameStatus ? "VICTORIA" : "DERROTA"}
            </MatchResult>
            <p className="m-0">33.23 min</p>
            <GetEmoji value={gameStatus} />
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
