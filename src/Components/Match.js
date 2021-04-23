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
import { Animated } from "react-animated-css";
import { ColorExtractor } from "react-color-extractor";

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
  SummonersContainer,
  Summoner,
  TimeAgo,
  RunesContainer,
  Rune,
  KdaContainer,
} from "../Components/styles/Match.style";

const Match = ({ data, emojiIndex }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [primaryRuneColor, setPrimaryRuneColor] = useState("");
  const [secondRuneColor, setSecondRuneColor] = useState("");

  const gameStatus = true;

  const GetEmoji = ({ value }) => {
    const i = emojiIndex;

    if (value) {
      if (emojiIndex <= 4) {
        return <Emoji src={peepoDance} emoji="peepoDance" className="emoji" />;
      } else if (i <= 7) {
        return <Emoji src={ezyClap} emoji="ezyClap" className="emoji" />;
      } else {
        return <Emoji src={peepoClap} emoji="peepoClap" className="emoji" />;
      }
    } else {
      if (emojiIndex <= 4) {
        return <Emoji src={peepoSad} emoji="peepoSad" className="emoji" />;
      } else if (i <= 7) {
        return <Emoji src={sadge} emoji="sadge" className="emoji" />;
      } else {
        return <Emoji src={sadgeRain} emoji="sadgeRain" className="emoji" />;
      }
    }
  };

  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(
          result[2],
          16
        )}, ${parseInt(result[3], 16)}, 0.1)`
      : null;
  }

  return (
    <React.Fragment>
      <MatchContainer
        onMouseEnter={() => {
          setShowEmoji(true);
        }}
        onMouseLeave={() => {
          setShowEmoji(false);
        }}
      >
        <MatchDetails>
          <Line status={gameStatus}></Line>
          <DetailsData>
            <RankedType className="m-0">Ranked Solo</RankedType>
            <TimeAgo style={{ marginBottom: 3 }}>Hace 5 horas</TimeAgo>

            <Animated
              animationIn={gameStatus ? "fadeInRight" : "fadeIn"}
              animationInDelay={gameStatus ? 200 : 0}
              animationOut={gameStatus ? "fadeOutRight" : "fadeOut"}
              isVisible={!showEmoji}
              animationInDuration={gameStatus ? 100 : 500}
              animationOutDuration={100}
              animateOnMount={false}
            >
              <MatchResult status={gameStatus} className="match-status">
                {gameStatus ? "VICTORIA" : "DERROTA"}
              </MatchResult>
            </Animated>
            <p className="m-0 game-duration">33:23 min</p>
            <Animated
              animationIn={gameStatus ? "bounceIn" : "fadeIn"}
              animationOut={gameStatus ? "bounceOut" : "fadeOut"}
              isVisible={showEmoji}
              animationInDuration={gameStatus ? 700 : 500}
              animationOutDuration={gameStatus ? 400 : 500}
              animateOnMount={false}
            >
              <GetEmoji value={gameStatus} />
            </Animated>
          </DetailsData>
        </MatchDetails>
        <ChampContainer>
          <ImageWrapper>
            <ChampionImg src={Jhin}></ChampionImg>
          </ImageWrapper>
          <SummonersContainer>
            <Summoner src="http://ddragon.leagueoflegends.com/cdn/11.8.1/img/spell/SummonerFlash.png"></Summoner>
            <Summoner
              src="http://ddragon.leagueoflegends.com/cdn/11.8.1/img/spell/SummonerDot.png"
              style={{ marginTop: 2 }}
            ></Summoner>
          </SummonersContainer>
          <RunesContainer>
            <ColorExtractor
              getColors={(colors) => {
                setPrimaryRuneColor(hexToRgb(colors[0]));
              }}
            >
              <img
                style={{ display: "none" }}
                src="http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
              />
            </ColorExtractor>
            <Rune color={primaryRuneColor}>
              <img
                src="http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
                alt=""
                style={{ width: 25, height: 25 }}
              />
            </Rune>

            <ColorExtractor
              getColors={(colors) => {
                setSecondRuneColor(hexToRgb(colors[0]));
              }}
            >
              <img
                style={{ display: "none" }}
                src="http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png"
              />
            </ColorExtractor>
            <Rune src="" color={secondRuneColor}>
              <img
                src="http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png"
                alt=""
                style={{ width: 20, height: 20 }}
              />
            </Rune>
          </RunesContainer>
        </ChampContainer>
        <KdaContainer>
          <div className="kda-container">
            <p className="kills">12</p>
            <p className="kda-divisor">/</p>
            <p className="deaths">2</p>
            <p className="kda-divisor">/</p>
            <p className="assists">9</p>
          </div>
          <p>2.60 KDA</p>
        </KdaContainer>
      </MatchContainer>
    </React.Fragment>
  );
};

export default Match;
