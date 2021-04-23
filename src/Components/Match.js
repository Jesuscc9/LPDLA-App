import React from "react";
import "../css/Match.css";
import Jhin from "../img/champions/Jhin.png";
import adc from "../img/positions/adc-icon.png";
import peepoDance from "../img/emojis/peepoDance.gif";

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
  return (
    <React.Fragment>
      <MatchContainer>
        <MatchDetails>
          <Line status={true}></Line>
          <DetailsData>
            <RankedType className="m-0">Ranked Solo</RankedType>
            <p className="mb-4">Hace 5 horas</p>
            <p className="m-0">33.23 min</p>
            <Emoji src={peepoDance} alt="" width="30" className="emoji" />
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
