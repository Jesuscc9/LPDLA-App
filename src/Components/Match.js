import React from "react";
import "../css/Match.css";
import Jhin from "../img/champions/Jhin.png";
import adc from "../img/positions/adc-icon.png";
import {
  MatchContainer,
  Line,
  ChampContainer,
  ChampionImg,
  ImageWrapper,
  MatchDetails,
  DetailsData,
  RankedType,
} from "../Components/styles/Match.style";

const Match = ({ data }) => {
  return (
    <React.Fragment>
      <MatchContainer>
        <MatchDetails>
          <Line status={true}></Line>
          <DetailsData>
            <RankedType className="m-0">Ranked Solo</RankedType>
            <p className="m-0">Hace 5 horas</p>
            <p className="m-0" status={true}>
              Derrota
            </p>
            <br />
            <p className="m-0">33.23 min</p>
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
